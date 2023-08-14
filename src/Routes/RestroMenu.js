

const RestroMenu =()=>{
    const fetchData =async()=>{
        const json = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1045952162951&lng=79.00067690759897&restaurantId=79542&catalog_qa=undefined&submitAction=ENTER')
        const data = await json.json()
        console.log(data)
    }
    fetchData();
    return(
        <div>
            
        </div>
    )
}

export default RestroMenu;