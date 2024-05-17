import CoverCarousel from "@/components/organisms/carousel/cover/CoverCarousel";
import NonTextRailCarousel from "@/components/organisms/carousel/rail/non-text/NonTextRailCarousel";
import TextRailCarousel from "@/components/organisms/carousel/rail/text/TextRailCarousel";
import ExploreList from "@/components/organisms/list/explore/ExploreList";

export default function Home() {

  const railList: {id: number, imageURL: string, webURL: string}[] = [
    {id: 1, imageURL: "/img/tablet.png", webURL: "111"},
    {id: 2, imageURL: "/img/tablet.png", webURL: "111"},
    {id: 3, imageURL: "/img/tablet.png", webURL: "111"},
    {id: 4, imageURL: "/img/tablet.png", webURL: "111"},
    {id: 5, imageURL: "/img/tablet.png", webURL: "111"},
    {id: 6, imageURL: "/img/tablet.png", webURL: "111"},
    {id: 7, imageURL: "/img/tablet.png", webURL: "111"},
    {id: 8, imageURL: "/img/tablet.png", webURL: "111"},
    {id: 9, imageURL: "/img/tablet.png", webURL: "111"},
  ]
  
  const railList2: {id: number, imageURL: string, webURL: string}[] = [
    {id: 1, imageURL: "/img/ofertas.png", webURL: "111"},
    {id: 2, imageURL: "/img/ofertas.png", webURL: "111"},
    {id: 3, imageURL: "/img/ofertas.png", webURL: "111"},
    {id: 4, imageURL: "/img/ofertas.png", webURL: "111"},
    {id: 5, imageURL: "/img/ofertas.png", webURL: "111"},
    {id: 6, imageURL: "/img/ofertas.png", webURL: "111"},
    {id: 7, imageURL: "/img/ofertas.png", webURL: "111"},
    {id: 8, imageURL: "/img/ofertas.png", webURL: "111"},
    {id: 9, imageURL: "/img/ofertas.png", webURL: "111"},
  ]

  const railList3: {id: number, imageURL: string, webURL: string, price: number, name: string}[] = [
    {id: 1, imageURL: "/img/tablet.png", webURL: "111", price: 222, name: "123123123123"},
    {id: 2, imageURL: "/img/tablet.png", webURL: "111", price: 222, name: "123123123123"},
    {id: 3, imageURL: "/img/tablet.png", webURL: "111", price: 222, name: "123123123123"},
    {id: 4, imageURL: "/img/tablet.png", webURL: "111", price: 222, name: "123123123123"},
    {id: 5, imageURL: "/img/tablet.png", webURL: "111", price: 222, name: "123123123123"},
    {id: 6, imageURL: "/img/tablet.png", webURL: "111", price: 222, name: "123123123123"},
    {id: 7, imageURL: "/img/tablet.png", webURL: "111", price: 222, name: "123123123123"},
    {id: 8, imageURL: "/img/tablet.png", webURL: "111", price: 222, name: "123123123123"},
    {id: 9, imageURL: "/img/tablet.png", webURL: "111", price: 222, name: "123123123123"},
  ]

  return (
    <div className="bg-[#b4becc]">
      <div className="relative h-[1300px]">
        <div>
          <CoverCarousel/>
        </div>
        <div className="absolute bottom-[2%]">
          <ExploreList/>
        </div>
      </div>
      <div className="space-y-[16px]">
        <div className="px-[12px]">
          <NonTextRailCarousel text="Relacionado con articulos que has visto" railList={railList}/>
        </div>
        <div className="px-[12px]">
          <NonTextRailCarousel text="Nuevos productos alucinantes" railList={railList2}/>
        </div>
        <div className="px-[12px]">
          <TextRailCarousel text="Ofertas inesperadas" railList={railList3} />
        </div>
      </div>
    </div>
  );
}