import MeetupList from "@/components/meetups/MeetupList";

const MEET_UPS = [
  {
    id: "1",
    title: "A First Meetup",
    image:
      "https://c4.wallpaperflare.com/wallpaper/955/962/485/guitar-wallpaper-preview.jpg",
    address: "demo/demohome/demoVillage/Town",
    description:
      "lorem ipsum page layout offering images for the valuble content demo data",
  },
  {
    id: "2",
    title: "A Second Meetup",
    image:
      "https://c4.wallpaperflare.com/wallpaper/955/962/485/guitar-wallpaper-preview.jpg",
    address: "demo/demohome/demoVillage/Town",
    description:
      "lorem ipsum page layout offering images for the valuble content demo data",
  },
];

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  //fetch data from API
  return {
    props: {
      meetups: MEET_UPS,
    },
  };
}

export default HomePage;
