import { useQuery } from "@tanstack/react-query";
import Song from "../Song";
import "./index.css";

const data = [
  {
    brand: "kumyoung",
    no: "82776",
    title: "사랑, 사랑",
    singer: "Kid Wine         ",
    composer: "Kid Wine,PATEKO..",
    lyricist: "Kid Wine         ",
    release: "2024-05-01",
  },
  {
    brand: "kumyoung",
    no: "82775",
    title: "묘해, 너와",
    singer: "태일(NCT)",
    composer: "심현보   ",
    lyricist: "심현보   ",
    release: "2024-05-01",
  },
];

function SongList({ searchText }) {
  const { data, isLoading } = useQuery({
    queryKey: ["getSong", searchText],
    queryFn: () => {
      // data를 promise 형태로 리턴해주는 객체를 리턴
      return fetch(
        searchText
          ? `https://api.manana.kr/karaoke/song/${searchText}.json`
          : "https://api.manana.kr/karaoke.json"
      ).then((res) => {
        return res.json();
      });
    },
  });

  // 데이터가 처음에 fetch될 때 undefined
  if (isLoading) {
    return "Loading...";
  }

  if (!data) {
    return "No data";
  }

  return (
    <div className="SongList">
      {data.map((song) => (
        <Song
          key={song.brand + song.no}
          title={song.title}
          singer={song.singer}
          no={song.no}
        />
      ))}
    </div>
  );
}

export default SongList;
