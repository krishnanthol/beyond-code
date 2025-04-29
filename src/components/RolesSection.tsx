import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Updated to use department images instead of team images
const departmentImages = [
  {
    src: "/departments/black-logo.png",
    name: "BSOS",
  },
  {
    src: "/departments/images (1).png",
    name: "SPP",
  },
  {
    src: "/departments/INFO_logo_tagline_white.png",
    name: "INFO",
  },
  {
    src: "/departments/logo.png",
    name: "ARHU",
  },
  {
    src: "/departments/merrill-logo-horizontal-google_0.png",
    name: "JOUR",
  },
  {
    src: "/departments/UMD_Clark_Logo_left-CMYK.png",
    name: "ENGR",
  },
  {
    src: "/departments/UMD_CMNS_Left_Color_1.png",
    name: "CMNS",
  },
  {
    src: "/departments/images-1.png",
    name: "AGNR",
  },
  {
    src: "/departments/images-2.png",
    name: "UMD Libraries",
  },
  {
    src: "/departments/UMD-MAPP-logo.png",
    name: "ARCH",
  },
];

export default function RolesSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="p-20 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Our Partner Departments
      </h2>
      <Slider {...settings}>
        {departmentImages.map((dept, index) => (
          <div key={index} className="px-3">
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img
                src={dept.src}
                alt={`${dept.name} Department`}
                className="w-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
