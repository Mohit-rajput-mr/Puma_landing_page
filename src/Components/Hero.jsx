import { arrowRight } from "../assets/icons"
import { mainShoe3 } from "../assets/images"
import { shoesGallery ,analytics } from "../constants"
import Button from "./Button"
import ShoeCard from "./ShoeCard"


const Hero = () => {
  return (
    <section id="home" className=" w-full  p-2 flex xl:flex-row flex-co1 justify-center min-h-screen gap-10 max-container8+">
        <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-blue-700 text-xl font-montserrat mt-[40px] " >Hot New Drops Just In!</p>
          <h1 className="text-8xl max-sm:text-[72px] max-sm:leading-[1] mt-10 font-palanquin font-bold" >
            <span className="pr-10 z-10  xl:whitespace-nowrap mt-[-20px]" >Latest Drop</span>
            <br/>

            <span className=" mt-[-20px] text-blue-900  " >Puma </span>
            Shoes
          </h1>
          <p className="font-montserrat leading-8 mt-6 text-slate-gray mb-14 sm-max-w-sm"  >Stylish, lightweight, and comfortable footwear with a durable sole, perfect for both running and casual wear. The versatile design pairs well with any outfit, available in a range of colors.</p>
          <Button label="Shop now" iconURL={arrowRight}/>
          <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
            {analytics.map((anlt) => (
              <div key={anlt.label} className="mt-[-50px]">
                <p className="font-mono text-4xl font-bold" >{anlt.value} </p>
                <p className="text-slate-gray font-palanquin leading-7" >{anlt.label} </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center h-6 w-6">
          <img src={mainShoe3} alt="shoe box" width={600} height={490} className="object-contain relative z-10"/>
          <div className="flex max-sm:px-6  sm:left-[10%] -bottom-[5%] absolute gap-4 sm:gap-6 " >
            {shoesGallery.map((shoe) => (
                <div key={shoe}>
                    <ShoeCard imgURL={shoe} mainShoeChange={() => {}} bigshoeImg=""/>
                </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Hero
