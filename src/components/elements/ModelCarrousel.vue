<template>
    <div id="home-wrapper"> 
        <!-- Carrousel -->          
        <div v-show="modelsFilled">
            <div>
                <div id="main-model-wrapper">
                    <img 
                        alt=logo 
                        src="mainModel.modelImageUrl"
                    >
                    <div id="main-model-info">
                        <div id="main-model-name">{{ mainModel.modelName }}</div>
                        <div id="main-model-company">{{ mainModel.company }}</div>
                    </div>
                </div>                
            </div>            
        </div>       
    </div>
</template>

<script>
import rentalApi from '../../api/rental.js';
export default {     
    name : 'ModelCarrousel',        
    data : function() {
        return {            
            modelsFilled : false, // conditional rendering data
            models : null, // variable to store api data
            mainModel : null
        }
    },
    methods : {
        fillModels() { 
            return rentalApi.getCarModels()                                                                             
        },
        getModels(listSize) {            
            return this.models.slice(0, listSize)            
        },
        // updateCarrousel() {
        //     setTimeout(()=> {
        //         console.log('updated carrousel!🌊')
        //     }, 5000)
        //     updateCarrousel()
        // }
    },
    created : function() {
        this.fillModels().then(data => {
            data.json().then(jsonData => {                
                this.modelsFilled = true  
                this.models = jsonData
                this.mainModel = this.models[0]              
            })
        })
    }
}
</script>

<style>
#main-model-wrapper {
    display: flex;
    width: 100%;
    background-color: aqua;
    font-size: xx-large;    
}
#main-model-wrapper {
    display: flex;
    width: max-content;
}
#main-model-name {
    font-size: xx-large;
}
#main-model-company {
    font-size: x-large;
}
#model-image {
    width: 70%;
}
#model-info {
    width: 30%;
    padding: 10px;
}
#model-name {
    font-size: xx-large;
    font-weight: bold;    
    color:black;
}
#model-company {
    font-size: x-large;    
    font-weight: bold;    
    color: grey;
}
</style>