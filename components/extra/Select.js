import { Dropdown } from "react-bootstrap"
import Caret from '~/assets/icons/select/caret-black.svg'
const Select = ({ list = [], placeholder = 'Chọn giá trị', selected = null, handerSelect, className = '', id }) => {
  let actived = list.find(it => it.id === selected)
  if (!id) {
    id = 'custom-select-' + Math.floor(Math.random() * 100000)
  }
  return (
    <>
      <Dropdown className={`custom-select d-inline-block ${className}`}>
        <Dropdown.Toggle className="border-0 text-start position-relative" variant="white" id={id}>
          {selected === null ? placeholder : (actived?.label)}
        </Dropdown.Toggle>
        <Dropdown.Menu className="rounded-3">
          {list.map((it, ind) => (
            <Dropdown.Item key={ind} onClick={() => handerSelect(it)}>{it.label}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <style jsx global>{`
        .custom-select .dropdown-toggle{
          min-width:120px;
          box-shadow: 0px 2px 4px rgb(202 202 202 / 34%);
          border-radius: 6px;
          padding: 12px 30px 12px 11px;
        }
        .custom-select .dropdown-toggle:after{
          content: url(${Caret});
          border:0;
          position: absolute;
          margin-left: 0;
          vertical-align: unset;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </>
  )
}
export default Select