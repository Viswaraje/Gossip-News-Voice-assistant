import React ,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';



const alanKey='c51e871540c22b75fcd3ec14d6749cf42e956eca572e1d8b807a3e2338fdd0dc/stage';

const App =()=>
{
  const[newsArticles,setNewsArticles]=useState([]);
  const [activeArticle,setActiveArticle]=useState(-1);
  const classes=useStyles();
 


  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles}) => {
        if(command ==='newHeadlines'){
          setNewsArticles(articles);
          setActiveArticle(-1);

       
        }
        else if(command==='highlight'){
          setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
        }

      }
    })
  },[])
  return(
    <div>
      <div className={classes.logoContainer}>
      <img src="https://thumbs.dreamstime.com/z/fake-news-concept-women-characters-telling-gossips-scandal-tales-to-each-other-street-people-spreading-wrong-scandalize-186939292.jpg_" className={classes.alanLogo} alt="logo" />
        
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  )
};


export default App;
