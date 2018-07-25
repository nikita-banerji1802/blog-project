import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  data:Array<any>;
  cats:Array<any>;
  private isUserLoggedIn;
  private username;
  constructor() { 
    this.isUserLoggedIn= false;
    this.cats=['Tech','Sports','Environment','Science','Spirituality','Business'];
    this.data = [
      { id: 0,
        title: 'Travel to Hiroshima, Japan: Emotion, Education and Change',
        date: 'July 17, 2018, 11:07 pm',
        description: 'Visiting Hiroshima will both surprise you with its striking modernity and overwhelm you with emotion about its past. Many are shocked when they arrive and see that it is a huge, functioning city, much the same in expanse and layout as many other key Japanese urban spots, since Hiroshima is more known as being the first city in history to be targeted and destroyed by a nuclear weapon – an atomic bomb which was dropped by the United States Army Air Forces during the final stages of World War II, killing thousands of people within seconds.'+
        'The bombing of Hiroshima, as well as nearby Nagasaki, are the only direct uses of the atomic bomb to date and when wandering the city’s streets, arty hang-out spaces and leisurely perusing the Hondōri shopping arcade, you would have no idea that approximately 70% of Hiroshima city was once completely wiped out in one of history’s biggest atrocities.'+
        'The main reason people travel to Hiroshima is to pay their respects and learn more about what happened here. Many still assume that it’s partially derelict from that time. Either way, your first point of call will no doubt be the Peace Memorial Park.',
        name: 'Nikita Banerji',
        userID: 'niki',
        image:'/assets/image/content/hiroshima.jpg',
        category: 'Sports',
        tag: ["Asia","Japan","Hiroshima","Education","Nagasaki","atomic"],
        short: 'Visiting Hiroshima will both surprise you with its striking modernity and overwhelm you with emotion about its past. Many are shocked when they arrive and see that it is a huge, functioning city, much the same in expanse and layout as many other key Japanese urban spots, since Hiroshima is more known as being the first city in history to be targeted...'
        },
      {   id:1,
        title:'Biking in Achensee, Tirol – The Mountain Forests, Caves & Waterfalls of Western Austria', 
        date:'12-04-2018 2:00 AM', 
        description:'Mountain biking in Achensee, Tirol counts as one of my most scenic bike rides in Austria. The area, famed for its gigantic turquoise lake and rugged mountain parameter has over 250km of cycling and mountain biking trails from which you can follow a designated path or craft your own with a guide.'+

        '“If you want a take the route with the best mountain view it will add an extra one and a half hours to the journey”, my guide said. And how could I refuse?'+
        
        'I started my tour in the village of Achenkirch with my local guide from Busslehner Sports for what would initially be an approximate three-hour e-biking introduction to the area taking the “old” Steinberg forest road to the little village Steinberg am Rofan located at 1,015 meters.',
        name:'Ankita Banerji',
        userID:'anki',
        category: 'Tech',
        image:'/assets/image/content/bike.jpg',
        tag:["Tech","Ankita","Banerji"],
        short:'Why is it that we seek results, goals?'+
        'Why is it that the mind is ever pursuing an end? And why'+
        'should it not pursue an end? In coming here, are we not seeking'+
        'something, some experience, some delight? We are tired and fed up'+
        ' and then we settle down to stagnate.'+'We are forever craving something..'
      },
      { id:2,
        title:'Vorarlberg, Austria: Alpine Hiking to Canyon Underworld in Bregenzerwald', 
        date:'12-04-2018 2:00 AM', 
        description:'We parked up by the shallow river bed and changed into our wetsuits and harness gear, starting with a practice run about how to use the karabiner system, perfecting our abseiling technique over a small bridge and building up some team motivation with my friends Natalie and Rob from Love & Road. We were all set for the half-day voyage.'+'Why is it that we seek results, goals?'+
          'Why is it that the mind is ever pursuing an end? And why'+
          'should it not pursue an end? In coming here, are we not seeking'+
          'something, some experience, some delight? We are tired and fed up'+
          ' with the many things that we have been playing with; we have turned'+
          ' away from them, and now we want a new toy to play with. We go from'+ 
          'one thing to another, till we find something that is entirely satisfying'+
          ' and then we settle down to stagnate.'+'We are forever craving something'+
          ' and having tasted many things which were mostly unsatisfactory, we now want'+
          ' the ultimate thing: God, truth, or what you will. We want a result, a new'+
          ' experience, a new sensation that will endure in spite of everything.'+
          ' We never see the futility of result, but only of a particular result; '+
          'so we wander from one result to another, hoping always to find the one that'+
          ' will end all search.', 
        short_description:'',
        name:'Shampa Banerji',
        userID:'shampa',
        category:'Science',
        image:'/assets/image/content/hiking.jpg',
        tag:["Science","Weak","Shampa"],
        short:'Why is it that we seek results, goals?'+
        'Why is it that the mind is ever pursuing an end? And why'+
        'should it not pursue an end? In coming here, are we not seeking'+
        'something, some experience, some delight? We are tired and fed up'+
        ' and then we settle down to stagnate.'+'We are forever craving something..'
      },
      {   id:3,
        title:'The Wine of the Wachau, Austria: Stories from the Towering Stone Wall Vineyards', 
        date:'12-04-2018 2:00 AM', 
        description:'Why is it that we seek results, goals?'+
          'Why is it that the mind is ever pursuing an end? And why'+
          'should it not pursue an end? In coming here, are we not seeking'+
          'something, some experience, some delight? We are tired and fed up'+
          ' with the many things that we have been playing with; we have turned'+
          ' away from them, and now we want a new toy to play with. We go from'+ 
          'one thing to another, till we find something that is entirely satisfying'+
          ' and then we settle down to stagnate.'+'We are forever craving something'+
          ' and having tasted many things which were mostly unsatisfactory, we now want'+
          ' the ultimate thing: God, truth, or what you will. We want a result, a new'+
          ' experience, a new sensation that will endure in spite of everything.'+
          ' We never see the futility of result, but only of a particular result; '+
          'so we wander from one result to another, hoping always to find the one that'+
          ' will end all search.',
        image:'/assets/image/content/wine.jpg',
        short_description:'',
        name:'Rahul Banerji',
        userID:'rahul',
        category: 'Spirituality',
        tag:["Spirituality","trademark","rahul"],
        short:'Why is it that we seek results, goals?'+
        'Why is it that the mind is ever pursuing an end? And why'+
        'should it not pursue an end? In coming here, are we not seeking'+
        'something, some experience, some delight? We are tired and fed up'+
        ' and then we settle down to stagnate.'+'We are forever craving something..'
      },
      {   id:4,
        title:'Summer in Achensee, Tirol: The Mountain Lake of 50 Adventures', 
        date:'12-04-2018 2:00 AM', 
        description:'Why is it that we seek results, goals?'+
          'Why is it that the mind is ever pursuing an end? And why'+
          'should it not pursue an end? In coming here, are we not seeking'+
          'something, some experience, some delight? We are tired and fed up'+
          ' with the many things that we have been playing with; we have turned'+
          ' away from them, and now we want a new toy to play with. We go from'+ 
          'one thing to another, till we find something that is entirely satisfying'+
          ' and then we settle down to stagnate.'+'We are forever craving something'+
          ' and having tasted many things which were mostly unsatisfactory, we now want'+
          ' the ultimate thing: God, truth, or what you will. We want a result, a new'+
          ' experience, a new sensation that will endure in spite of everything.'+
          ' We never see the futility of result, but only of a particular result; '+
          'so we wander from one result to another, hoping always to find the one that'+
          ' will end all search.', 
        image:'/assets/image/content/Tirol.jpg',
        short_description:'',
        name:'Jimmy Banerji',
        userID:'jim',
        category: 'Business',
        tag:["Business","clogged","cities"],
        short:'Why is it that we seek results, goals?'+
        'Why is it that the mind is ever pursuing an end? And why'+
        'should it not pursue an end? In coming here, are we not seeking'+
        'something, some experience, some delight? We are tired and fed up'+
        ' and then we settle down to stagnate.'+'We are forever craving something..'
      },
      {   id:5,
        title:'Wildschönau, Tirol in Summer: Austria’s Alpine Views and Adrenalin Skies', 
        date:'12-04-2018 2:00 AM', 
        description:'Why is it that we seek results, goals?'+
          'Why is it that the mind is ever pursuing an end? And why'+
          'should it not pursue an end? In coming here, are we not seeking'+
          'something, some experience, some delight? We are tired and fed up'+
          ' with the many things that we have been playing with; we have turned'+
          ' away from them, and now we want a new toy to play with. We go from'+ 
          'one thing to another, till we find something that is entirely satisfying'+
          ' and then we settle down to stagnate.'+'We are forever craving something'+
          ' and having tasted many things which were mostly unsatisfactory, we now want'+
          ' the ultimate thing: God, truth, or what you will. We want a result, a new'+
          ' experience, a new sensation that will endure in spite of everything.'+
          ' We never see the futility of result, but only of a particular result; '+
          'so we wander from one result to another, hoping always to find the one that'+
          ' will end all search.',
          image:'/assets/image/content/Alpine.jpg',
        short_description:'',
        name:'Nikita Banerji',
        userID:'niki',
        category: 'Science',
        tag:["Science","keepers","data"],
        short:'Why is it that we seek results, goals?'+
        'Why is it that the mind is ever pursuing an end? And why'+
        'should it not pursue an end? In coming here, are we not seeking'+
        'something, some experience, some delight? We are tired and fed up'+
        ' and then we settle down to stagnate.'+'We are forever craving something..'
      }     
  ]
  }

  showDetails(){
    return this.data;
  }
  showCategories(){
    return this.cats;
  }
  setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
 
}
