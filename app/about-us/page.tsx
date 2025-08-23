import { BackButton } from "@/components/ui";
import Partners from "@/features/partners/Partners";
import Image from "next/image";
import { Metadata } from "next";

// Statički metadata za About Us stranicu
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Autoseller, our mission, and our trusted partners in the automotive industry.",
};

const AboutUsPage = () => {
  return (
    <main className="flex flex-col flex-1  max-w-screen-2xl mx-auto z-10 w-full py-4 px-2 2xl:px-0">
      <BackButton />
      <h1 className="mb-2">
        Who are <span className="text-primary">we?</span>
      </h1>

      <div className="flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-3 space-y-3 lg:space-y-0 mb-8">
        <div className="w-full lg:w-1/2">
          <p>
            Posuere ullamcorper egestas et massa. Risus habitant enim ac et
            aliquam mi. Natoque massa massa tortor vestibulum viverra.
            Consectetur consequat luctus est a sit sapien ultricies quis. Ipsum
            amet urna feugiat aenean. Faucibus ornare porttitor vitae vivamus
            nisi volutpat. Ut ut ornare in mattis.{" "}
          </p>{" "}
          <p>
            Viverra etiam cursus natoque vivamus amet elit sit faucibus euismod.
            Suspendisse suspendisse mattis lorem malesuada egestas in luctus.
            Purus risus bibendum neque turpis pharetra. At aliquet mi et sem
            pretium vitae odio massa vulputate. Ornare sagittis imperdiet vitae
            dui eget venenatis rhoncus. Id amet ut risus leo. Suspendisse arcu
            nulla neque at. Eu sapien pellentesque non ac nulla sed a. Eu vel
            sollicitudin eget faucibus nulla gravida mattis fermentum molestie.
            Egestas nisi eget pharetra eget. Ut nunc nulla donec tortor. Congue
            neque vestibulum risus.
          </p>{" "}
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/about-us/about-us-image.png"
            alt="test"
            width={588}
            height={273}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <h2 className="mb-2">Our Partners</h2>
      <div className="z-10 overflow-x-auto overflow-y-hidden scrollbar-hide mb-4">
        <Partners />
      </div>
    </main>
  );
};

export default AboutUsPage;
