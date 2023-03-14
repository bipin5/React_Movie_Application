import "assets/scss/index.scss";

export default function Image({ selectedImg, title }) {
  return (
    <div className="overflow-hidden banner-image">
      <img className="img-fluid" src={selectedImg} alt={title} />
    </div>
  );
}
