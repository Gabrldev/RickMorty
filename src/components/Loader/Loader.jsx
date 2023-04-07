import style from "./loader.module.css";
export default function Loader() {
  return (
    <div className={style.container}>
      <div className={style.loader}>Loading</div>
    </div>
  );
}
