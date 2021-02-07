import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import AddRecipe from './components/Recipes/AddRecipe/AddRecipe';
import RecipeDetail from './components/Recipes/RecipeDetail/RecipeDetail';
import Recipe from './Models/Recipe';
import AddIngredient from './components/Ingredients/AddIngredient/AddIngredient';
import { BrowserRouter } from 'react-router-dom';
import Ingredient from './Models/Ingredient';

class App extends Component {

  state={
    shouldIDisplay:false,
    shouldIDisplayIngredients:false,
    displayRecipeDetail:false,
    addRecipes: ()=>{},
    ingredientName:"",
    ingredientAmount:0,
    counter:0,
    recipeOneIngredients:[],
    recipeTwoIngredients:[],
    recipeThreeIngredients:[],
    recipeFourIngredients:[],
    recipeFiveIngredients:[],
    recipeSixIngredients:[],
    recipeSevenIngredients:[],
    recipeIngredients:[],
    recipes:[],
    selectedItem:-1,
    displayIngredientForm:false
  }


  addIngredient = ()=>{
    let newIngredient=new Ingredient(this.state.ingredientName,this.state.ingredientAmount);
    let ingredientsArray;
    switch(this.state.selectedItem){
      case 0:{
        ingredientsArray = this.state.recipeOneIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeOneIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeOneIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 1:{
        ingredientsArray = this.state.recipeTwoIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeTwoIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeTwoIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 2:{
        ingredientsArray = this.state.recipeThreeIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeThreeIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeThreeIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 3:{
        ingredientsArray = this.state.recipeFourIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeFourIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeFourIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 4:{
        ingredientsArray = this.state.recipeFiveIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeFiveIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeFiveIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 5:{
        ingredientsArray = this.state.recipeSixIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeSixIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeSixIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      case 6:{
        ingredientsArray = this.state.recipeSevenIngredients
        ingredientsArray.push(newIngredient)
        this.setState({
          recipeSevenIngredients:ingredientsArray
        })
        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp[this.state.selectedItem]=this.state.recipeSevenIngredients;
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
        break;
      }
      default:{}
    }
  }

  addRecipe= ()=>{
    this.setState({
      shouldIDisplay:true,
      counter:this.state.counter<7?++this.state.counter:-1,
      shouldIDeleteRecipe:false});
      let recipesTemp;
      let recept;
      let ingredientsArray;
      switch(this.state.counter){
          case 1:{
            ingredientsArray = [new Ingredient("Nizovi i matrice",10)]
            this.setState({
              recipeOneIngredients:ingredientsArray
            })
            recept =  new Recipe("Programski jezik C","Beginner nivo","http://2.bp.blogspot.com/-UYt6LnzXk2Y/WiQncagSnhI/AAAAAAAAGTU/CEDp88IZog4whsn60mjr3QW-W6WiNdPowCK4BGAYYCw/s1600/C%2BProgramming%2BFor%2Babsolute%2Bbeginner%2B-%2BFree%2BBook.pdf.jpg",this.state.recipeOneIngredients)
            break;
          }
          case 2:{
            ingredientsArray = [new Ingredient("Klase i objekti",5)]
            this.setState({
              recipeTwoIngredients:ingredientsArray
            });
            recept = new Recipe("Java","Trece dopunjeno izdanje","https://1.bp.blogspot.com/-12-p6-V3gA0/WxdBvmhetJI/AAAAAAAALhY/a12zOSXiR1YQYpZcSff03aHQlPRDMZd9QCEwYBhgL/s320/Effective%2BJava%2B3rd%2BEdition.jpg")
            break;
          }
          case 3:{
            ingredientsArray = [new Ingredient("DataGreedView",300)]
            this.setState({
              recipeThreeIngredients:ingredientsArray
            });
            recept = new Recipe("C#","Pandan programskom jeziku Java","https://miro.medium.com/max/768/0*QkB8hU6509OL63p7.jpg")
            break;
          }
          case 4:{
            ingredientsArray = [new Ingredient("Machine Learning, AI",1)]
            this.setState({
              recipeFourIngredients:ingredientsArray
            });
            recept = new Recipe("Python","Data science","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUREA8VFhUXGBsYFhcVFxoZGBgXGxUbGB0YFRYYHSghGxolGxgWIjEhJSkrLjAuGB8zODMtNygtLisBCgoKDg0OGhAQGy4lICErLS0tLSsvMi01LS0tKy0tLi0tNS0tLS0tKy0tLS0tLS0tLS0tLS0vKy0tLSstLTctK//AABEIAQEAxAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcDAgj/xABMEAACAQIDBAYDDAgEBQQDAAABAgMAEQQSIQUGMUETIjJRYXEHgbEUIzRCUlORkqHB0eEXM1Ric5Oy0hUkVYMWcrPC8SVDovA1Y4L/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QALxEBAAIBAQUGBgIDAQAAAAAAAAECAxESExQxUQQVITJSYQUzQXGBoSLBQkOxNP/aAAwDAQACEQMRAD8A2mCFcq9UcByHdTHb+yfdEDwo4jZtA4Go18LVJQdlfIeyvdqROixMxOsM7/R3P/qLfVb++j9Hc/8AqLfVb++tEtRatm9u6OLy9WdN6PZhqdpNp4N/fXGDcWRxmTamYd4zefy/EfTWi4vD9IjISQGBBI42PdUfPu/E1+0t7dk21AtfzsBTe3OLy9f0p59H83+pH6D/AH1xTchyFYbUNmNl6ranuHXq5zbvIQcp1uCM2oHVynTyubcL612w2xI0YOC1xwBOnPlbx+wU3tji8vX9KKNymuB/ivE2Gjcdf3/A11/4Cltf/Ezbvsf76t0u7sZAAvdVyJc9VV7rDiPtoj3bjAtmc3VlJuNQ1ieXeNO65pvbHF5ev6U3/glrgf4rqRccdQeBHXpTuM/+q+3uv8vuBNW7GbqwSXvnFxZsrEE+vjXM7mYS597NioXKDZbABRYd9ha/HU03tji8vX9Kq24zjjtX2+H7/iPpFcBuloD/AIwLMTl465TlNuv31cRudhusSGOcWa542YMD4EEV0O6mG0ul7IU17jxPnpTe2OLy9f0qg3DkOn+Ka+v++l/R/L/qR+g/31ZRujCrh4up3jiCCQSoBOg09VOBu1Dw61uAF9LaH2qKb6xxeXr+lT/R/N/qR+g/31XN7PRxi+iOIwuPeV1FzEruudeeQ5+1blzrUP8AhuHTtaePiTb7TXiTdxcysjkWIvfW9rD1aafRUtkm3NhfPkvGlpfLvu6fgcROCNCDLICD3EZtDR7um/aZ/wCa/wDdW0+lT0b+6M2NwSgTgXliHCUfKXukH21k+6uzYMRMYsQzhuCRA9GXa/WBkIIRlFzlI1ta4rBq1MI8ViGNkmxLHuWSRjx7ge+rvuZiHxMvuPFYuTD4gaJ0mbr6dlusMsltdeNRmxXk2fimCBllClXUWbp4M4YS4cnTpQBw4cx3U73qihxgg9xe+4t2De95riEAnPIxNw2Yrd3ObTQKKyraa8mdMtqTrWWubtbnyYabpZMWZVylcjA2uSNdWI5d1W3oV+SPoFZn6Nt/nZ/8N2kcuKTqq7WHS9wblnsR4EaitQvUtaZ8ZS97XnWyL2jEMwso4d3iaK6bR7Q8vvNFYsD2Dsr5D2V0rnB2V8h7K9M1heqPVFROA3ggmKBGYZ1LpnUrmUNlJF/G30ipBcSp4MDpfQjh3+VB2orh7rS18628xSnFJwzr38Rw76DtRXIYheGYfSOXGgYhPlryHEc+FB1oprHj0a9m0UkEnQacSCeI148K6idSbBhfuvr9FB1opAaKBaKSigWikooFopKKAIrKfSr6NRiA2MwSe/cZYl0EtvjL3SW+n7a1ag0HzRg9tR42H3NjSwnjN8PKgPTvJmsF1+NyIYgWGnCnWDOIwUuWYBXmRZMRHA4vOim+eF07MoOYMo0YXtflePSr6OOnzY3AoOnGssS6dMOZHdIPtqj7v7Uhxqe4sSkcUigjDsFEYjYcFU9pWB1txagcbZ2FhsXH0+CRUcjMjIXvIyADLlLGxUWuVsFOpYnSrl6LfSP05GBxzjpx1Y5bgrNl0tmGhfTl2uVUDAY2bCYh4porzWvLDoFnW1xiIhwzgDMU4HU2uLVHb6z4OSRZsHITI/WlyjKi9UZStuzJpqBe3feivpLaJ6w8vvNFZduTv5NNhgMSnSPG3R581i4CqwLD5XWsfKiojX4OyvkPZTTbMcjwSJCVDspVSxIAJFrm3dencHZXyHsquekQkYCWxI1XUGx7Q5isojWdGVK7Vor1e5924ysCLlCxmPPe5YpELqgPIZgCfAVGbU2E6R5EIKmSQjLfhIpVRJbhEgJ0F72XxrMjM3zj/Wb8aUTP84/12/Gunhvd6Xdk+pp+E2E0tncKhDTMVbrK0zIsaOtgPego4WBrz/wrKyFHljAaFYja5Iu4aZsx4s4A1PPyrMumf5x/rt+NHTN84/1m/GnDe53bPqaoN23EhdXi/wDeYXB6ryL0aW8FjuD3kmjDbrGN1KuhVWj0a/6uKMhR/wAxkJYnusKyvpW+cf6zfjR0r/OP9Zvxpw3ud2T6mnndWTogvSR5xC8el8ueaTNK/wBBNvGvWxsIxxKSPCVTruljrG2RY8sykfJBy2JHGsu6V/nH+s340GV/nH+s3404b3O7J9X6b/nHeKM476wDpX+cf6zfjTnA4TEzMFhWZ76XBbKPNr2AqT2fTnKW+HbMazZu2cd4ozjvFYJiRJG7RvI+ZTlazta47ta59K/zj/Wb8acN7rHw2Z8Ys3/OO8UZx3isA6RvnH+s340dI3zj/Wb8avC+53ZPqb/nHeKM47xWAdI3zj/Wb8aOlf5x/rN+NOF9zuyfU3/OO8UZx3isA6VvnH+s340dK/zj/Wb8acN7ndk+pv8AmHfWV+lP0cie+NwIAnGskY0Eltcy90gt66qnSv8AOP8AWb8aOmf5x/rt+NOG9zu2fUr2B2mkkLwYiUQSXzy4hkZ5pShYqo1usitlWwt1VHdaq4vlVyxm7D4tnbDLmmVS7J84B8n9/wBtU3/xroQe4jka0XpNZ0cObFOK81ldNw/1Mn8Y/wDTjoo3C/Uyfxj/ANOOitbU+j4OyvkPZVc9IvwCXzX+oVY4OyvkPZVc9I3wCXzX+oVnTzQ2YPmV+8MowmLWPMWw8ctxwkvp5W76um8Gz8JBgo8VHg0zyZAAxOVc4uefdeqC/A+VaHvn/wDisN5xf0GuzJH8oex2mNL095VLDbUhB9/wMTJzyXVgO9dfsp/vNu4sMaYrDOXw8gB1NymbhrzXlrwqtk2BJrRJLRbDVZwRmUAD4wzPcAA8wKXnZmJhc8zivWa/WeTPaSrbsfdXC4mBsRHipwEvmUqmYEC50FVfEmK46AyFbcZQoN/JeVbIvFp0b6Zq3mYj6OdCgkgAXJIAA5k8h9lTmytl4OZJHbETx9Cgd7qhB5dQjx5HWpTcFMGcWFVJnkysyNLkyra3AL8bXjWNsmkSwydoisW0idYVPEwNG7RuLMpsw46+dWn0a4yX3WIukbo+jY5CeqCCNQOXE/TTTb5wPumcMmKz9IblSmXN4A62rr6NPhwv80/tWsbzrSWvLbbwTMx9ELt/4ViP4re2mNT228HGmKmbFO4zSMVjiAMjKTozMdEHdzp1svYmCxuZMLLNFMouElswYd+nEeVWLxEQzrnrWkTMTppzVelr1NEyMyOLMrFWHcQdbeFSOytiNMjzu4igTtSML38EXmazm0RGrfbJWsazKLpafmXBg2WDEOPlNKqMfEIFt9Jp2NgiWFp8FI0ip+sicASp9Gjd9TbhhvojzRohKWu2BwjzMEiW7HvIAt4k1YNq7myQRxFnXOxJlcm0USAczxJ9tWbxE6SXzUpMRM+MqxRViwGD2UbJJi5ix0z5ciXPdpoPOm282774N1BfPG98j2te3JuV9akZI10SuetrbPKfdI+jT4b/ALbe0V29Kno490ZsbgkHT8ZYxp0o71//AGe2uPoz+G/7be0VrVcmfzvJ+IfO/D5u3DB6GUEEHpiCCLEHo49CDwNFbTtTdrDGVnEeVpOs+U2Ba2XMQOdlH0UVocWqzQdlfIeyq56RfgEvmv8AWKscHZXyHsquekX4BL5r/WKzp5obMHzK/djz8D5VpO9UqrsrDZ4hID0QsWK26t8wK8/xrNpDofL7q0PfI/8ApWG84v6DXZl80fd7Pao1vjj3VfBYrAIQ7YWeRhqEd1KX8bWv665bf29NjHDSWVF7Ea8F0tcnm3jUXS1sikROrfGGm1tT4z7rP6PNpdFiuiY9ScZTfhnA0+kXH0VFbzbN9zYqWLgt86f8jai3ruPVUarlSGU6qQw8wbj2Voe3tnrtGHC4xbAD9ee6Liw9RH2mtdv4X2urRkndZtv6W/6p2L96w0UPBpj08n/JwjU/1VJ+jf4ev8J/+2oLaWMM0skp0DN1R3IOqo+qBU56OD/n1/hv/wBtW0fwlllrMYLa85jVF7x/C8R/Fapf0a/Dh/Cf2rURvMLYzE3+dP5VL+jY2xw/hv7Vpb5f4TJ49m/CH3hYnF4gk69I32afh9FPdxT/AJ+G37w9WWmG3vhWI/it7af7jH/Pw+bf00t8v8Mr/wDm/H9OO+a/5/EAc3X7UUVYfSJGIIMLhI9EF2IHPIABf1sT9FV/fX4diLccy/TkU1Yd7JBjsDDjItWiNpVGpUEWa48CAfKsJ/xlon/VM8v7UarDuBizHjo1B0kDIw77DMPtH2mq9erJuFhQcT7pkIWKBWZnY2XMQQBc87XNbcumzLp7VNd1baMt98CIcXMiCwNnAHLNrp6xVm9I0ze5sItzlbVvEhBa/fVG3g26cfjJfckTSkm17HKkY0DHw4muW05XcZzi5Z2hUM8pJENuBiWO2UFbLqNTeuebx/F59s9YnHr4zHMPwN+7Wr1vYxbZODZtTmTX/bYVRnq77zn/ANIwf/Mn9D1uyears7Tpt4/uZejP4b/tt7RWtVkvoz+G/wC23tFa1XP2jzvO+IfO/BhtHtDy+80UbR7Q8vvNFc7hPYOyvkPZVc9I3wCXzX+oVY4OyvkPZVc9IvwCXzX+sVnj80NuD5lfvDKMJOiX6TDpNfgHLAD6vG9TmM3xkliEEuEgaMWsnWFsvCxvpaq2KK9CaRM+L6C2Glp1s6TurMWWMIDwRSSB6zrXiiism2PDkKnsPtCSHZrRZrDESkRjujAGc+RYWrlu1seHElxPihDltYXUFgeJBbupvvBiEabLEfeolEUXiq8W9bEm9a7TFp2XNeYyX2NOXjKNFONn414JFmiIDobi+oNxYhh3GuFJWyYiXRasWjSU9tLefpm6UYGFJrWM1y7eaqQACOV71x2LvCcKc8WFiMtrNK5Ys1zc6DQX8Kh6WsN3XTRq3GPZ2dPA92ttITsXOGjjcnM7oW62lrFTp6/Cu2xtte5SHjw0TSC9pHLXseQANhUXS1dmNNGW6rs7Ongkts7Y90sXfDRpKbXkQtc271Oh05032ZtOXDsXhfLftKRdGHcynjTSucstgTmAA0LHgD3d5buAqTFax4sbRjx00tyd9q7bw63PuBelPJJnWIH95LEjyB1qDOCxGKaOPMzZ9QrHJGljqzKDYKBzJJ9lezhXVgpDLms4zgEsc2kmvZFtfKn8b2HRQHpJJivWXV5GvocvKFNW/eKi+grhvebfZ4WbNN59vpCdg6GEHBLmhQMY5ZgQWna1yoy6xpoTmuT1baXo2ntRDbDxYdegXVutpIfC2tzpc35DvrmiqgMz3MSHooQT1pmS4y+EKsCzfKPEmwFRzMSSWNydSf8A7y+6tmHHtTrLo7F2beW2rcodMPIqtd4lkGvUYkDzuuulTmL3taWIQSYKAxLbKl3GW3CxvVepa65rEvXtipeYmVq9GxvjiQLAxtYXvbUaXNazWS+jP4b/ALbe0VrdcefzvG+IeGX8I/aPaHl95oo2j2h5feaK0OI9g7K+Q9lRu82yjisO0AfJmI61r2sQeHqqSg7K+Q9le7VlE6eK1tNZ1hm/6M3/AGwfy/zo/Rm/7YP5f51pFqLVs313Txubqzf9Gb/tg/l/nR+jJ/2wfy/zrSLUWpvrrx2fqzZvRgx44sHzj/Oj9GT/ALYP5f51pNqLU31zjs3Vm/6Mn/bB/L/Oj9GT/tg/l/nWkWotTfXONz9Wb/ozf9sH8v8AOj9Gb/tg/l/nWkWotTfXTjc/Vm/6M3/bB/L/ADqB3l2Fh8AB0+PzOdVijjvI3qvovidK0PfveUbPwjTBc0hISJPlSNwv+6BcnwFY/itlRSgucUj4qQhnklYi9z2eYVdSBzFuFN9fqvG5uqLZsRJEZhEUj0s3KxNhdrczpUvsDZ5ljLTxZwotEX0hViLM54Xsclr6C51rpCfc9kln6V8gWOCJgIUTkXI0K6k6EWtTj/E5ZSERxI3Zyop6MGwsI4ybvY36x04VhNpnm0Xy3vOtpR/uJFRi8haU3zSOQp6LmIlvfL1SM2lwBUrurg8Vi7HC4IRKQAcQ7EAx2sAQNSxW18oq37n7jFR02OUFibrDfMFvzkf47eHZHACr8kYAsBYDgBWLBnH6M3uD7rGgsPe9FX5Ki+i+FL+jJ/2wfy/zrSLUWrZGW0cnRXteWsaRLN/0Zv8Atg/l/nR+jJ/2wfy/zrSLUWq7668bm6qbuvuW2En6Y4jP1StstuJGt7+FXIUWorXa02nWWjJktknatzR20e0PL7zRS7R7Q8vvNFYsD2Dsr5D2V0rnB2V8h7K6VQUUUUBRRUHvZvJHgYTK4LMTljjXtSPyUX5cyeQoJotUFtDfPZ8Byy46FW4Zc4JHmBw4Vk+8+0MZOEkxbEo0gBiRssaAqctwO3c6a8Ty1qMwWz2lcokCBDZWdQNADci/MnrDThfU8qDasNvvs2QgJj4DfhdwL+V6nIplYBkYMp4EEEHyIr5r25DF0rZIVMa3UhdesDZlN/jWFdd3Nq4nDOJMHKwQ6lDYKw7spNuAF+B0040H0mKKpO43pBgx3vLgRYgDVCbq/jG3PxHEVdQaDKvTtCxGBa4CdM6ljwDNHcX9SvVL2bgoJIyoUhlGbpAxKlSTdyO/wHCwrct69gR47DSYaXQMLqw4q4N1YeINYFikxOz52ixSlJRpGw7Mim4zLyK944iwor3h3wweNkaQRiysSq5nzHrOi3spPIHS3KtJ3e3r2LAbRsVkt1nkQ52vrYvbwvYWFZtj3jZiyRhF+IVYksFQdZlI4HXu4072VtBYep0cciObZXHjqpbiLD8qDfMDtGKUXilV7AE2OoB4XHEU7r52wM0MWKimw+aA2ZeqSSrE9W97Z15ZTW0bnbxDGREsuWWM5ZV5ZvlL+6eNEWGiiigKKKKAooooI7aPaHl95oo2j2h5feaKgewdlfIeyulc4OyvkPZXSqCiiigQmsG3o2xicZtJ5sMjssBaOBQFZWymztZiASW5X4AVuO0nKxSMOIRiPMKa+dt0d4mhAspcak3yqwJuWs/HTlm08aCxYHbEeLgkwmIBgkt1lCkdbQrIqvrmBUdU+NN93sbkJhlAXI2Zb6B7m5ZfDnY8zXnaO0MHjkviFMcoFlZmUFkNiOsjWFm77H1VUNpIC5V5WkIBXpSeOUcPKxFm8DRVpGxZWzKNVdzlIPVyu2Yuw+Vla1hxtTPeXBR9IIcLdgP1mUjIHFgEDgX4HWozA7wSpGYQzAFSEN7FSRoyvxBt9F6kN3cM+IcRK6xjJmuNWLZhoAfjfl30EcYlQplJEl7KR1QbHQoRzBvr4DhWs+jvfvprYTGsBODlRyR76AODd0g1B77GqHtDCYZA0MOaWaxBlPYicHhmGmpuSF46XqExuF4O0pupFmtazZuIW2rG+g40H07eo3bmwsPi4+jxMKyLyvxB71PEHyrKdjelHFYZRHjcO81urmAyuNL2a+hIA46VJS+lqSRf8vs9lJuM8zgKLcTYanTlREJv5uguzWimw8paJ2KGOQjMARqqtzUrcXOoqLxW8kkeRYYYooktZAOkzg20Z2Hhy8710dMRtB3xGJxIdhoq6Kqx2uDGp0AOvW49XU14xm7ZaKN8C6zgkB8jXIBB6wY6ZBYgjjwPOin0MWGx7iRbrOD0hjGqtlPfwAP5ctbJ6MPdBx2JeWy5kBeO9yjZzlFvK+vOojBxJgMOEBUzMCJGFs1r9VVA1Ci4A4ce+tE3G2K0EPSTD3+azSGwBAtZVNuYHHxvRFmooooCiikoFooooI7aPaHl95oo2j2h5feaKgewdlfIeyulYcnpN2lBIylYMRGHYWIMbqqsQBmBtwHMVdt2vShg8SRHLfDyE2Cy2yk9wkHVvodDrpVF7opFa9Leg5zJmUqeBBH0i1fMuytnxJiZcNiEs8cjqWz5LKrm4vcXOWxA4Gvp6sI9NO7hixi4tFHR4iyyaXAlUcf/AOlH/wAfGgi9r7MwRglkweNUmJh1Sxs6k2KrcZs1+FrqbHheoPAYYyBoSQG7cbPZuF+oPAkkk0+2XsrpbiKVCQxADpY8Bdrgmw9VNNpYCWF1ikUqzXKZT1SvIqx425jleinGD2cksXRMvRzXvGz6ITyjc8lbk3InXSmQglgYJKrRMW1ymxHAHUajy7qm8RE7wxYhZ7WjySg3ClSchuLHS+hqY2HhoNpL/h+KfLKmuGnQ3uQp96kJ7Ytw5kX1uLkK1htphVFwpQaG4NyvDqHxsL89auOxtmLApxONkQOqjqqCVw+YAgaXLyFSBpwLEDXWqbtzdrFYSQxSxmw7NuDJzMdhc+0Cu0u33kURnKwsDY3+KwIykarayjW5oHe8m1kllWRUMaKhyXsC0jHtsuoHVFh561LbrbHilw7SvKZenQeAidTeyj5YtY+PdUFhsZhbnNgFPA3d2IUDqkhdAB2eA+3WpFt59DFDAMttejvlAuerlGvjfxoG827MpnaMOgiBvHI5ubnllHxr8cvkRTrFiSKJYIM6xHrTThgrEmwN1BuOVrcbAU8w8WMxbFcLGQBplGoUlbEySnQHjcC/fatC3Y3L6LLLi5FllHBUGWJT8qx1d+HWY+QFBCejvcYRn3ViI+sf1YcddrHqySdx7lPDjxrTBSAUtEFJS0UBRRRQJS0lLQR20e0PL7zRRtHtDy+80VB89YjZkhxEow0BlTpZCshFhmJJYG5AI7QA8qicfgGUhJ4THxFrZs1hcta5vroTwq2bKe82LAdiouoWOwDsZ7EML2zEKdb2tcm1q5baw0UV5MTGBiHBZgWbqKSbZBplRQOrezP3ACqrnudv3i9n2RmM2GBsY3Yl0/hOfX1Tp3WrdtgbcgxkInw0gdD9KnmrDiGHdXz62w5zlEg6NSc6kgqQLdoLwUFRfrEcfWeG7u2J8BL7qw7CzfrFUHI6g/G8eOvEeNEfTYNRG9ewkx2Flw0mmcdVuaONVYeINqZbn754baCXibLIB14m0dT4fKHiNKslB8pYTEYnCzGO5SWNyHVgGGZbg2DDgRqOVrGrc22VmhZdoo0oNyksQCurkHROAtqBf7OdevTBgAm1BIGC9JErXPAFTlJ8CRwvppTDZWHwQjfpsbnfIWXL1jE2ihSi3uTYXsDpworzsTHpEGE8blQ19UzRheBSRstgMtzp38K44vZ6YZlngxYzL77ChJL5QSAEJ4kngTamy4vEpG2GV26ORr9FlFme+twx0BI1PGrLtDY6Jg1SeZQVIIc8QTfRCT2b3Fhe9wRQanuztKHamCSSSNWzDLLGwByyAagg8OR9YphifRjgWUrGJI1NzkVrprodGBPC4tfnVO9D20RDinwwvknXOpNgSycz3Eqe74ovwrZhRGex+ijDKcwma9rdhLaG4sLVLbO9HuAiN+iLkkt1zcXIANlFhbQaVbKKDnFCqiyqABwAFgPVXSiigKKKKAooooCiiigKSlooI7aPaHl95oo2j2h5feaKg+c8PtmfD4uVkKm7SKVK3ULnbXKOduHrr1AuIxHTTGzdGnvry6Aqb2Ci3W0UgAcPPg23i2XNh5ZRKhUl3a1+t0bs1mH7pBJ0018K74LaMjQHCkaE5ouAu+YNlPIX5E68BVVJCOFIUDu+JdgoyBm6KEEADNYFmIJHU0Jy24UbH2Q+ImaIxuqxqxYOhU5xfLfMACC2pUchajd6MRKMVIkgjRurHlszTMLXBOlhxzG4va1S+0d6hJb3PCQFF2ZULvmABFlAJUXXLc24E6caCl4jDsrtIjNG6MFXI1jmBI0y8SxsOPI8atce/wBtvD5YXKMbWQyxdZrGx1UjrefePW0wkAiniMsbxqr52DrlbrAhHKsNVzX4DSxJ41ctqbDTEIsUhDMhurhruHbiy30KgWUg3HV5UGeCabG4tnxMwEsnYdhoBr1MmgZbA6DWn2y4oumy4iWyG9rHKrlXyHMyi/f1dPOmgwMpxTYbLncEqQrAqwy6ENw01N+XnauuB2ZI+IXCNaN7nN0lmKlQCSo7LAhhr4GgZ7QZBjVOHayJPH0TEtlChlGrcwTca34njVm2juzLK8s+ZUJuRnv1FCDq8BYrlseWoPKpPZe6kcchkYM8gvq2gUkG5y2st9Rc8K8DbHSSyRx2eFY1zsnxpGzAR3va5VWUm/xhflQRXo1izYvDSWYe+Pa3dlIPSMeNyDYC3Ct7FZN6OdnA4lci2jhUnTv7ILMNHJva516hPBrnWhRBRRRQFFIaUUBRSUUC0UUUBRRRQFFFJQR20e0PL7zRS7R7Q8vvNFQVHCYrB7ZiaCQZJ4iycs4ykrmQ/GRgOFZZvLuVPg3ZCqsjEnS+iX0ZflXFxl4i49TsrNhse0TNlkVy6EGwZGJKuHtpa56tvisOdbBs2WLaeEDSDW9iV0KuNM6d1+PkaqsQ2btppETBzAhWypGyj3xSCFQsOaq9iQdSD6qmtl7aOBkaKUF11JEWXR7AdJc8VI0tc8B4173q3LkilkOuZ2LIy2VSALno+ebtXU93Gq0Ddgkkd+Rz30Uji3Ag3vYaW7qCyLK+PxHTqxjQdRi1iQt7BVJ0LnUnjbTjeumM3FUn3rEFRcEI4zZB35wQwtodeZrrhd4Y4I7qgVByVRlvwLIvfpz+7Vnjd+JZIzHholiBJEjuwLseIyEDTha//mgZQbD2hhJ0aKK9r5ShGRlsLiQE6E24a1aN1thMsjYnGMr4iXRlTVYlPWsG5k87cja3Oq/s3HY2yu+LkaMMLBrZcl7sX0udBYHxFWTFbyxi5IJAOayLe9l0GW+mjcaCL3+xGIUKjPbDOoQhRZ2Is0iOeLdXgPOm+CwSwxQ4eIEyMXEaWIXpmJKG+rC2Ui9tL62rrtHCzY+YK8Jaw96jVrkM2l5JRooBvqdRY8a1LdrdkYe0spDzkWzfFQHisY8+J4n7KD1uXu8MFhxHoZGOaV/lNa2pHGwAF/CrDSKKWiCiiigKKKKAooooCiiigKKKKApKWigjto9oeX3mijaPaHl95oqDANpS9HipZI36QsWEma7Axlh1Lv45fUtaBuFjzHjjCLBJ4i2UCw6RLMHA7irFb8yKou38C6F3ckdLKcmikCPNlN3HG51txFieNW3YOzzh8Xhcjgxq+VLElQHUk2J1PWvx4euqrVcXhElQpIisp4hhcVRNs+j+7AxHOnczFZVHDSQdrTk3G3HjWhCi1EYJtLcnFqCqQSAa2DKWFiSbkpfUD2iozD7oYsgBYJAbcon56akgeOvia+jrUZaDCtjbjbQPahkXgtmZVXLbU3Jve4U8KuuwPR/lW2I6NATcpDxJsR1pDxGvdcd9aBagCgZ7M2XDh1yQRKi8TlHE97Hix8TengpaKAooooCiiigKKKKAooooCiiigKKKKAoopKCO2j2h5feaKNo9oeX3mioMYxU3u3GGAuyRAuqrYXIjBJZr9kkEqCeVjzAFr2RD/nsOkeXL2jlGgVA3/d93dVXbY0kMhxDyILMzZebqSxVFc6EtcLl/ePyan/R/imCT7UnjJvaGIA6yMWANuQ69lB86qtWFLVcj21iFkEM+GUOwzJkkzKVBUOCSAcyhr9xqFwvpBL4bpxFH+siS/SHowZNbO+XRl5gA8RRF9oqt7L3mMuIGHMa9knOrXU2SNurzI984+FcJd7WWCLEnCsySFkAQ5mEvSFEW3yWItm5XHnQWuimOzp5mLCaEJbLYhswYkXNvAHTxp9QFFFFAUlLRQFFFFAUUUUBRRRQFFIaYw7WhYgLILnN3jsNla9+FjpQP6KaNtCMMqdILtwsb93E+sV6jxqEsocXVspvp1rXsL8TY8qBzRTeHGRv2JFbjoCCdDY6eYNOKCN2j2h5feaKXaPaHl95oqDH5+m2ni1wmGBVUY9JJyVQxzSH94mwVe+3K9a8mxIBhxhBH70ECBeGg4G4+NfW/fXLdzYUOEjywrq5Lux7Ts2pLHw4AcgBUxVERgdhJGxkaSSVyuQPI1yqfJXQWv38TTNtz8PlQIZEyCMKUaxvEeoxuNWFyLnvqx0UFfO68fSCYTTLLzcMLtdVU5tLcEWvWG3YjRRH0krRh1kRGa6qyydIMul+131PUlAUtFFAV4mkCgsxsALnyr3XiVAwIIuCLGgbjaMXOVR4E2P0GvB2rCOMy/SO7N7K8S7FgY3MK+OnHUHXv4Up2NBfN0K3sBw0sAANPID6KD0+1YRxlXhc68BcDX1kD10LtWE/+8nC/HlQuyYBf3lNRY6cRe9j6wD6qT/BsP8wn1RQdosbGzZVcFtTbnYGxpwKbQ4CNGLpGoY8SBrqb+2nNAtFFFB4kW4IvbxFQ8m7cLX1cXzXs3NiST9v2CpukoIlN34Q6yBTdSTx0NzfUc7WW3dlFJJsCNu0z8WbjzYgk/ZbyuKmKSgYYLZaxtmUnRQoBtoO+9r60/paKCN2j2h5feaKNo9oeX3mioGcfAeQpaKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigaYrj6vvpaKKD/2Q==")
            break;
          }
          case 5:{
            ingredientsArray = [new Ingredient("Laravel i ostali okviri",1)]
            this.setState({
              recipeFiveIngredients:ingredientsArray
            });
            recept = new Recipe("PHP","Za sve ljubitelje PHP-a","https://tutorials.hostucan.com/wp-content/uploads/2013/11/PHP-for-absolute-beginners2.png")
            break;
          }
          case 6:{
            ingredientsArray = [new Ingredient("Not same as Java :)",1)]
            this.setState({
              recipeSixIngredients:ingredientsArray
            });
            recept = new Recipe("Javascript","Za pocetnike","https://prodimage.images-bn.com/pimages/9781491914915_p0_v6_s550x406.jpg")
            break;
          }
          case 7:{
            ingredientsArray = [new Ingredient("Programiranje",300)]
            this.setState({
              recipeSevenIngredients:ingredientsArray
            });
            recept = new Recipe("Swift","Apple","https://qph.fs.quoracdn.net/main-qimg-e983579cfe6ad342c743761ea9d46919")
            break;
          }
          default:{}
        }
        recipesTemp=this.state.recipes;
        recipesTemp.push(recept);
        this.setState({recipes:recipesTemp});

        let recipeIngredientsTemp=this.state.recipeIngredients;
        recipeIngredientsTemp.push(ingredientsArray);
        this.setState({
          recipeIngredients:recipeIngredientsTemp
        });
      }

  displayIngredient=()=>{
    this.setState({
      shouldIDisplayIngredient:true
    })
  }

  addIngredientName=(event)=>{
    this.setState({
      ingredientName:event.target.value
    })
  }

  addIngredientAmount=(event)=>{
    this.setState({
      ingredientAmount:event.target.value
    })
  }

  displayDetail=(recipeId)=>{
    this.setState({
      displayRecipeDetail:true,
      selectedItem:recipeId,
      shouldIDisplayIngredients:true
    },()=>{
      if(this.state.selectedItem===-1){
        this.setState({
          displayRecipeDetail:false
        })
      }
    })

  }

  removeRecipe=()=>{
    let recipesTemp=this.state.recipes;
    recipesTemp.splice(this.state.selectedItem,1);
    this.setState({
      recipes: recipesTemp
    });

    let selectedItemTemp=this.state.selectedItem;
    this.setState({
      counter:this.state.counter>0?--this.state.counter:-1,
      selectedItem:selectedItemTemp>0?--selectedItemTemp:0
    });
  }

  alterSelectedRecipe=(newRecipeName,newRecipeDescription,newImagePath)=>{
    let recipesTemp=this.state.recipes;
    recipesTemp[this.state.selectedItem]=new Recipe(newRecipeName,newRecipeDescription,newImagePath);

    this.setState({
      recipes:recipesTemp
    })
  }

  RecipeNameChangedHandler = (event)=>{
    let recipesTemp=this.state.recipes;
    recipesTemp[this.state.selectedItem].name=event.target.value;
    this.setState({
      recipes:recipesTemp
    })
  }

  RecipeDescriptionChangedHandler =(event)=>{
    let recipesTemp=this.state.recipes;
    recipesTemp[this.state.selectedItem].description=event.target.value;
    this.setState({
      recipes:recipesTemp
    })
  }

  RecipeImageChangedHandler =(event)=>{
    let recipesTemp=this.state.recipes;
    recipesTemp[this.state.selectedItem].imagePath=event.target.value;
    this.setState({
      recipes:recipesTemp
    })
  }

  displayIngredientFormHandler = () =>{
    this.setState({
      displayIngredientForm:true
    })
  }

  closeFormHandler = () =>{
    this.setState({
      displayIngredientForm:false
    })
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <AppHeader/>
        <div className="container">
          <div className="recipe">
            <AddRecipe
            recipeIngredients={this.state.recipeIngredients}
            ingredientName={this.state.ingredientName}
            ingredientAmount={this.state.ingredientAmount}
            selectedItem={this.state.selectedItem}
            shouldIDeleteRecipe={this.state.shouldIDeleteRecipe}
            recipes={this.state.recipes}
            addRecipe={this.addRecipe}
            selectedItem={this.state.selectedItem}
            shouldIDisplay={this.state.shouldIDisplay}
            displayDetail={this.displayDetail}
            recipes={this.state.recipes}
            shouldIDisplayIngredients={this.state.shouldIDisplayIngredients}
            />
          </div>
          <div className="recipe">
            <RecipeDetail
            displayIngredientFormHandler={this.displayIngredientFormHandler}
            descChanged={this.RecipeDescriptionChangedHandler}
            imgChanged={this.RecipeImageChangedHandler}
            nameChanged={this.RecipeNameChangedHandler}
            alterSelectedRecipe={this.alterSelectedRecipe}
            displayEditForm={this.state.displayEditForm}
            removeRecipe={this.removeRecipe}
            deleteRecipe={this.deleteRecipe}
            recipes={this.state.recipes}
            displayRecipeDetail={this.state.displayRecipeDetail}
            selectedItem={this.state.selectedItem}/>
          </div>
          {this.state.displayIngredientForm?
          <div className="ingredient">
            <AddIngredient
            closeForm={this.closeFormHandler}
            addIngredient={this.addIngredient}
            displayIngredientForm={this.state.displayIngredientForm}
            displayIngredient={this.displayIngredient}
            addIngredientName={this.addIngredientName}
            addIngredientAmount={this.addIngredientAmount}
            />
          </div>:console.log()}
          
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
