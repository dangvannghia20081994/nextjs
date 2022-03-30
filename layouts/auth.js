import styles from './auth.module.scss'
console.log(styles);
const Default = ({ children }) => {
  return (
    <div className={`${styles.auth} d-flex min-vh-100 w-100 p-3 justify-content-center align-items-center position-relative flex-wrap`}>
      <div className={`${styles.wapper} overflow-hidden`}>
        <div className={`w-100`}>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Default