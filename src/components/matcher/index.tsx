import { component$ } from '@builder.io/qwik';

export default component$((props: any) => {
  
  const renderImageBtn = (imageObj: any) => {
    const { image, name } = imageObj;
    return (
      <div class="mb-10 flex flex-col lg:mr-20 lg:mb-0 lg:last:mr-0">
        <img
          class="w-40 h-40 object-cover object-top mx-auto"
          src={image}
        />
        <h5 class="text-center mb-5 mt-5 font-semibold">{name}</h5>
        <button class="bg-sky-500 hover:bg-sky-700 text-base rounded py-2 w-40 mx-auto">
          Stronger
        </button>
      </div>
    )
  }
  const { firstImage, secondImage } = props;

  return (
    <article class="flex align-center flex-col lg:flex-row lg:justify-center">
        {renderImageBtn(firstImage)}
        {renderImageBtn(secondImage)}
    </article>
  );
});
