// type carModel = {
//     modelName : string,
//     company : string,
//     modelImageUrl : string,
//     year : number,
//     doorNumber : number,
//     brakes : string,
//     automatic : boolean,
// }

// fake json data
const carModels = [
    { modelName : 'Zoe e-tech', company : 'Renault', modelImageUrl : 'https://www.pngall.com/wp-content/uploads/11/White-Tesla-PNG.png', 
    year : 2022, doorNumber : 4, brakes : 'ABS', automatic : true, },

    { modelName : 'Kwid 1.0', company : 'Renault', modelImageUrl : 'https://www.pngall.com/wp-content/uploads/11/White-Tesla-PNG.png', 
    year : 2020, doorNumber : 4, brakes : 'ABS', automatic : false, },

    { modelName : 'Vyage', company : 'Volkswagen', modelImageUrl : 'https://www.pngall.com/wp-content/uploads/11/White-Tesla-PNG.png', 
    year : 2019, doorNumber : 4, brakes : 'ABS', automatic : false, },
]

export default {
    // promise based fake api call
    getCarModels () {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(
                    new Response(JSON.stringify(carModels), {
                        status : 200,
                        headers : {                             
                            "Content-Type": "application/json; utf-8",
                        }
                    })
                )
            }, 2000) // 2 seconds of traffic            
        })
    }
}