import EmptyLayout from '~/layouts/empty'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
const Test = () => {
  const router = useRouter()
  const query = router.query;
  const [text, setText] = useState('')
  const resultRef = useRef()
  const inputRef = useRef();
  const removeVietnameseTones = (str) => {
    if (str.length > 50) { return 'error' }
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    str = str.replace(/đ/g, 'd')
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
    str = str.replace(/Đ/g, 'D')
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/\s+/g, ' ')
    str = str.trim()
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\\=|\\<|\\>|\?|\/|,|\.|\\:|\\;|\\'|\\"|\\&|\\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ')
    return str
  }
  const convertHTML = (str) => {
    const tag = document.querySelector("#html-convert");
    if (!tag) { return }
    tag.innerHTML = text;
    //remove thead
    tag?.firstChild?.firstChild?.remove();
    //remove first row
    document.querySelector("#html-convert table tbody tr:first-child")?.remove()
    //remove column first
    document.querySelectorAll("#html-convert table tbody tr th:first-child").forEach(ele => {
      ele.remove()
    });
    //remove row empty
    document.querySelectorAll("#html-convert table tr").forEach((e, i) => {
      if (e.textContent.trim().length == 0) {
        e.parentNode.removeChild(e);
      }
    });
    //remove column private
    const removes = (query.remove?.replace(/\D/g, "").split('').map(Number) || []).sort().reverse()
    removes.forEach((ind) => {
      document.querySelectorAll(`#html-convert table tbody tr td:nth-child(${ind})`).forEach(ele => {
        ele.remove();
      });
    })
    //remove attribute
    const attribute = JSON.parse(query.attribute || 'false')
    if (!attribute) {
      document.querySelectorAll("#html-convert *").forEach((element) => {
        if (element) {
          element.removeAttribute("cellspacing");
          element.removeAttribute("cellpadding");
          element.removeAttribute("id");
          element.removeAttribute("style");
          element.removeAttribute("class");
          element.removeAttribute("rel");
          element.removeAttribute("dir");
        }
      });
    }
    document.querySelector('#html-convert table')?.classList?.add('table','table-bordered','table-dark','table-striped-columns')
  };
  const getString = () => {
    const list = {};
    const table = document.querySelector("table");
    if (!table) return;
    const gets = (query.get?.replace(/\D/g, "").split('').map(Number) || [1, 5, 6]).sort()
    const districtColumn = parseInt(query.district?.replace(/\D/g, "") || 0)
    const trs = table.getElementsByTagName("tr");
    Array.from(trs).forEach((tr, ind) => {
      if (ind === 0) {
        return;
      }
      const td = tr.getElementsByTagName("td");
      let districtCode = 'all'
      if (districtColumn === 12) {
        let districtName = td[districtColumn].textContent || td[districtColumn].innerText;
        districtCode = removeVietnameseTones(districtName)
        if (!list[districtCode]) {
          list[districtCode] = [`// ${districtName}`];
        }
      } else {
        if (!list[districtCode]) {
          list[districtCode] = [];
        }
      }
      let listTmp = []
      gets.forEach(idx => {
        if (td[idx]) {
          let temp = td[idx].textContent || td[idx].innerText;
          listTmp.push(temp);
        }
      })
      const finall = listTmp.join(' - ').trim();
      finall = finall.replace(/(ck+ )(\d*)/, "");
      finall = finall.replace(/%/g, "");
      finall = finall.replace(/\n/g, " ");
      finall = finall.replace(/\t/g, "");
      finall = finall.replace(/(\s\w+\s)(\d*\s)/, "");
      // finall = finall.replace(/(thưởng )(\d*)/, "");
      finall = finall.replace(/--*/, "");
      finall = finall.replace(/\s+/g, " "); // mutiple space to single space
      finall = finall.trim()
      list[districtCode].push(finall);
    });
    const news = Object.values(list).reduce((pre, cur) => [...pre, ...cur, '\n\n'], [])
    resultRef.current.value = news.join("\n");
    localStorage.setItem('rooms', news.join('\n'))
  };
  const getString_ = () => {
    const list = [];
    const table = document.querySelector("table");
    if (!table) return;
    const gets = (
      query.get?.replace(/\D/g, "").split("").map(Number) || [1, 5, 6]
    ).sort();
    const trs = table.getElementsByTagName("tr");
    Array.from(trs).forEach((tr, ind) => {
      if (ind === 0) {
        return;
      }
      const td = tr.getElementsByTagName("td");
      let listTmp = [];
      gets.forEach((idx) => {
        if (td[idx]) {
          let temp = td[idx].textContent || td[idx].innerText;
          listTmp.push(temp);
        }
      });
      const finall = listTmp.join(" - ").trim();
      finall = finall.replace(/(ck+ )(\d*)/, "");
      finall = finall.replace(/%/g, "");
      finall = finall.replace(/\n/g, " ");
      finall = finall.replace(/\t/g, "");
      finall = finall.replace(/(\s\w+\s)(\d*\s)/, "");
      // finall = finall.replace(/(thưởng )(\d*)/, "");
      finall = finall.replace(/--*/, "");
      finall = finall.replace(/\s+/g, " "); // mutiple space to single space
      finall = finall.trim();
      list.push(finall);
    });
    resultRef.current.value = list.join("\n");
    localStorage.setItem("rooms", list.join("\n"));
  };
  const filter = (filter = '') => {
    const list = []
    filter = filter?.toUpperCase()
    var table, trs;
    table = document.querySelector("table");
    if (!table) return;
    trs = table.getElementsByTagName("tr"); 
    Array.from(trs).forEach((tr, ind) => {
      let td = tr.getElementsByTagName("td")[11];
      if (td) {
        let txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr.style.display = "";
        } else {
          tr.style.display = "none";
        }
      }
    })
    resultRef.current.value = list.join('\n')
  };
  useEffect(() => {
    const string = localStorage.getItem("string") || "";
    const rooms = localStorage.getItem("rooms") || '';
    resultRef.current.value = rooms;
    inputRef.current.value = string;
    setText(string);
  }, [])
  
  useEffect(() => {
    if (text) localStorage.setItem("string", text);
    document.querySelector("#html-convert").innerHTML = text;
    convertHTML(text);
    getString();
  }, [text])
  
  return (
    <div className="row">
      <div className="col-6">
        <textarea
          ref={inputRef}
          className="w-100 min-vh-100"
          placeholder="Enter text"
          onChange={(e) => setText(e.target.value)}></textarea>
      </div>
      <div className="col-6">
        <textarea
          ref={resultRef}
          rows={10}
          className="w-100 min-vh-100"></textarea>
      </div>
      <div className="col-12">
        <div id="html-convert" className="d-none"></div>
      </div>
    </div>
  );
}
Test.Layout = EmptyLayout;
export default Test;