import EmptyLayout from '~/layouts/empty'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
const Test = () => {
  const router = useRouter()
  const query = router.query;
  const [text, setText] = useState()
  const resultRef = useRef()
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
    const list = [];
    const table = document.querySelector("table");
    if (!table) return;
    const gets = (query.get?.replace(/\D/g, "").split('').map(Number) || [1, 5, 6]).sort()
    const trs = table.getElementsByTagName("tr");
    Array.from(trs).forEach((tr, ind) => {
      if (ind === 0) {
        return;
      }
      const td = tr.getElementsByTagName("td");
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
      list.push(finall);
    });
    resultRef.current.value = list.join("\n");
    localStorage.setItem('rooms', list.join('\n'))
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
    const rooms = localStorage.getItem("rooms") || '';
    resultRef.current.value = rooms;
  }, [])
  
  useEffect(() => {
    document.querySelector("#html-convert").innerHTML = text;
    convertHTML(text);
    getString();
  }, [text])
  
  return (
    <div className="row">
      <div className="col-6">
        <textarea
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