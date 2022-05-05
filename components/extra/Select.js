import { Dropdown } from "react-bootstrap"
import Caret from '~/assets/icons/select/caret-black.svg'
const Select = ({ list = [], placeholder = 'Chọn giá trị', selected = null, align = "right", handerSelect, className = '', id, ...props }) => {
  let actived = list.find(it => it.id === selected)
  if (!actived) {
    const group = list.find(it => it.group)
    if (group) {
      actived = group.sub.find(it => it.id === selected)
    }
  }
  if (!id) {
    id = 'custom-select-' + Math.floor(Math.random() * 100000)
  }
  return (
    <>
      <Dropdown className={`custom-select d-inline-block ${className}`} align={align}>
        <Dropdown.Toggle className={`${props.toggle} rounded-2 border text-start position-relative shadow-none`} variant="light" id={id}>
          {!actived ? placeholder : actived.label}
        </Dropdown.Toggle>
        <Dropdown.Menu className="rounded-2 scrollbar">
          {list.map((it, ind) => {
            return it.group ?
            (
              <Group key={ind} item={it} handerSelect={handerSelect} selected={selected} />
            ) : (
              <Dropdown.Item key={ind} as="button" onClick={() => handerSelect(it)} className={`${it.id === selected ? 'fw-bold' : ''}`}>{it.label}</Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
      <style jsx global>{`
        .custom-select .dropdown-toggle{
          min-width:120px;
          box-shadow: 0px 2px 4px rgb(202 202 202 / 34%);
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
        .custom-select .dropdown-menu{
          max-height: 300px;
        }
      `}</style>
    </>
  )
}
const Group = ({ item = null, handerSelect, selected = ''}) => {
  return item && (
    <>
      <Dropdown.Header className="text-body fw-bold">
        <div>{item.label}</div>
        {
          item.sub.map((it, ind) => (
            <Dropdown.Item key={ind} as="button" onClick={() => handerSelect(it)} className={`${it.id === selected ? 'fw-bold' : ''}`}>{it.label}</Dropdown.Item>
          ))
        }
      </Dropdown.Header>
    </>
  )
}
export default Select