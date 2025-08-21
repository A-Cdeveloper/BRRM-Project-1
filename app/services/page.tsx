import { BackButton } from "@/components/ui";
import { services } from "@/data/services";
import Service from "@/features/services/Service";

const ServicesPage = () => {
  return (
    <main className="flex flex-col flex-1  max-w-screen-2xl mx-auto z-10 w-full py-4 px-2 2xl:px-0">
      <BackButton />
      <h1 className="mb-2">
        Our <span className="text-primary">services</span>
      </h1>

      <div className="w-full">
        <p>
          Arcu ipsum senectus nullam amet imperdiet. Turpis pellentesque eu
          sapien diam eu tempor. Convallis sollicitudin gravida aenean turpis
          nec faucibus in ac. Tristique enim amet pellentesque elit ornare ac
          duis faucibus dolor. Suspendisse iaculis diam nascetur placerat vel
          eget lobortis nullam. Consectetur at massa augue tellus quis morbi
          rhoncus. Ut et cursus quis nunc mauris euismod quisque mi. Egestas
          morbi eget sagittis volutpat blandit erat mauris mi integer. In
          suspendisse integer aliquam leo ut faucibus nunc. Leo vitae malesuada
          arcu integer donec. Egestas quisque quam ullamcorper eu urna volutpat
          amet ultrices. Odio massa urna ornare eget commodo. Lacus morbi ut
          blandit nisl sed vitae. Pharetra velit vestibulum enim faucibus eget
          malesuada. Vestibulum nunc ut vulputate id turpis egestas suspendisse
          amet.
        </p>{" "}
        <p>
          Viverra etiam cursus natoque vivamus amet elit sit faucibus euismod.
          Suspendisse suspendisse mattis lorem malesuada egestas in luctus.
          Purus risus bibendum neque turpis pharetra. At aliquet mi et sem
        </p>{" "}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        {services.map((service) => (
          <Service
            key={service.id}
            headline={service.headline}
            info={service.info}
            icon={service.icon}
          />
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;
