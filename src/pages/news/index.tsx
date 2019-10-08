import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import Card from '../../components/card';
import Spinner from '../../components/spinner';

const Container = styled.div`
  width: 950px;
  margin: 0 auto;
  background: #ecf1f5;
  min-height: calc( 100vh - 120px );
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 100px 20px 20px 20px;
  position: relative;
`;

interface NewsFeed {
  id: number;
  title: string;
  text: string;
}


const News: React.FC = (props: any) => {
   const [loading, setLoading] = useState(false);
   const [news, setNews] = useState<Array<NewsFeed>|undefined>(undefined);

   useEffect(() => {
    let ignore = false;
    async function fetchData() {
      setLoading(true);
      let response;
      try {
        response = await axios(
          'https://mysterious-reef-29460.herokuapp.com/api/v1/news'
        );
      } catch (error) {
        setLoading(false);
      }
      if (response) {
        const { data } = response.data;

        //if prevent state changes if component is unmounted
        if (!ignore) { setNews(data); }
        if (!ignore) { setLoading(false); }

      }
    }
    fetchData();

    return () => {
      ignore = true;
    };
  }, []);
   return <Container>
              {loading?<Spinner height={'40px'} width={'40px'} border={'8px'}/>:null}
              {news&&news.map((n)=><Card { ...n} key={n.id}/>)}

          </Container>

}

export default News;
