import React from 'react'

const Item = ({ item, className= '', ...props }) => {
  const getHtmlNotify = () => {
    if (!item) return "";
    let html = item.text;
    if (item.level === 1) {
      if (html.includes(" đã báo cáo vi phạm câu hỏi của bạn")) {
        const ind = html.indexOf(" đã báo cáo vi phạm câu hỏi của bạn");
        html = `<span class="fw-bold">${html.substring(0, ind)}</span>${html.substring(ind)}`;
      } else if (html.includes(" đã trả lời câu hỏi")) {
        const ind = html.indexOf(" đã trả lời câu hỏi");
        html = `<span class="fw-bold">${html.substring(0, ind)}</span>${html.substring(ind)}`;
      } else if (html.includes(" đã báo cáo vi phạm câu trả lời của bạn")) {
        const ind = html.indexOf(" đã báo cáo vi phạm câu trả lời của bạn");
        html = `<span class="fw-bold">${html.substring(0,ind)}</span>${html.substring(ind)}`;
      }
    } else if (item.level === 2) {
      if (html.includes("Bạn bị trừ ")) {
        const ind = "Bạn bị trừ ".length;
        html = html.substring(0, ind) + `<span class="text-danger fw-bold">- ${html.substring(ind).replace("-", "").replace("điểm", "")} "</span> điểm`
      } else if (html.includes("Bạn được cộng ")) {
        const ind = "Bạn được cộng ".length;
        html = html.substring(0, ind) + `<span class="text-success fw-bold">${html.substring(ind).replace("+", "").replace("điểm", "")}</span> điểm`;
      } else if (html.includes(" đã báo cáo vi phạm câu trả lời của bạn")) {
        const ind = html.indexOf(" đã báo cáo vi phạm câu trả lời của bạn");
        html = `<span class="fw-bold">${html.substring( 0, ind )}</span>${html.substring(ind)}`;
      }
    }
    return html;
  };
  return (
    <div className={`${className}`} dangerouslySetInnerHTML={{ __html: getHtmlNotify() }}></div>
  );
};

export default Item