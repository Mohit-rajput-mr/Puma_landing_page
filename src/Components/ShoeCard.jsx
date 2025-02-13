

const ShoeCard = ({imgURL, mainShoeChange, mainShoeImg}) => {
    const handelClick = () => {
        if(mainShoeImg !== imgURL.mainShoe) {
            mainShoeChange(imgURL.mainShoe)
        }
    }
  return (
    <div className={`rounded-xl border-2 ${mainShoeImg ===imgURL ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handelClick} > 

        <div className="flex justify-center items-centerbg-center bg-cover bg-card max-sm:p-4 rounded-xl sm:h-41 sm:w-41 ">
            <img src={imgURL.thumbnail} alt="shoe box " width={127} height={103} className="object-contain" />
        </div>  

      
    </div>
  )
}

export default ShoeCard
