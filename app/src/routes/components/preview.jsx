import previewImg from '../../img/preview-image.jpg'

export default function Preview() {
  return (
    <>
      <section class="preview pb-20">
        <div class="container mx-auto">
          <div class="preview-img">
            <img src={previewImg} alt="Chat App Preview" />
          </div>
        </div>
      </section>
    </>
  );
}
