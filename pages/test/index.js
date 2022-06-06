import EmptyLayout from '~/layouts/empty'
import { useState, useEffect, useRef } from 'react'
const Test = () => {
  const [text, setText] = useState('')
  const resultRef = useRef()
  const convertHTML = (str) => {
    //remove attribute
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
    //remove thead
    document.querySelector("#html-convert")?.firstChild?.firstChild?.remove()
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
    // [12, 3].forEach((ind) => {
    //   document.querySelectorAll(`#html-convert table tbody tr td:nth-child(${ind})`).forEach(ele => {
    //     ele.remove();
    //   });
    // })
    document.querySelector('#html-convert table')?.classList?.add('table','table-bordered','table-dark','table-striped-columns')
  };
  const filter = (filter = '') => {
    const list = []
    filter = filter?.toUpperCase()
    var table, trs, td, i, txtValue;
    table = document.querySelector("table");
    if (!table) return;
    trs = table.getElementsByTagName("tr"); 
    // Loop through all table rows, and hide those who don't match the search query
    Array.from(trs).forEach((tr, ind) => {
      if (ind === 0) { return }
      const td = tr.getElementsByTagName('td')
      const sttAddress = 1
      const sttPrice = 5
      const sttType = 6
      let address = td[sttAddress].textContent || td[sttAddress].innerText;
      address = address.replace(/ +/g, " ");// mutiple space to single space
      const arr = address.split('-')
      if (arr.length === 2) {
      } else if (arr.length === 3) {
        address = arr.slice(arr.length - 1, arr.length).join().trim();
      } else if (arr.length === 4 || arr.length === 5) {
        address = arr.slice(arr.length - 2, arr.length).join('-').trim();
      }
      address = address.replace(/(ck )([0-9]+)/, "");
      const price = td[sttPrice].textContent || td[sttPrice].innerText;
      const type = td[sttType].textContent || td[sttType].innerText;
      const finall = `${address} - ${price} - ${type}`;
      finall = finall.replace(/\n/g, ' ');
      finall = finall.replace(/\t/g, '');
      finall = finall.replace(/%/g, '');
      list.push(finall);
      // td = tr.getElementsByTagName("td")[11];
      // if (td) {
      //   txtValue = td.textContent || td.innerText;
      //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //     tr.style.display = "";
      //   } else {
      //     tr.style.display = "none";
      //   }
      // }
    })
    resultRef.current.value = list.join('\n')
  };
  useEffect(() => {
    document.querySelector("#html-convert").innerHTML = text;
    convertHTML(text);
    filter()
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