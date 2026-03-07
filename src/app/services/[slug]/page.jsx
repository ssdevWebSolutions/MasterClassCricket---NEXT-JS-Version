import ServiceLayout from "../../components/ServiceLayout";
import servicesData from "../../data/servicesData";

export default function ServicePage({ params }) {
  const { slug } = params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <h1 style={{ color: "#fff", textAlign: "center", padding: "100px" }}>
        Service Not Found
      </h1>
    );
  }

  return (
    <ServiceLayout
      title={service.title}
      subtitle={service.subtitle}
      description={service.detail}
      image={service.image}
      expectations={service.expectations || []}
    />
  );
}
