import React, { useState, useEffect, useContext } from 'react';
import Spinner from '../../components/spinner';
import axios from "axios";
import styled from 'styled-components';
import { StoreCTX } from '../../store';
import Icon from '@mdi/react'
import { mdiWeb, mdiVkCircle, mdiTwitterCircle, mdiYoutube, mdiTelegram } from '@mdi/js'

const selectIcon = (label: string):string => {
  switch(label){
    case 'vk':
      return mdiVkCircle;
    case 'twitter':
      return mdiTwitterCircle;
    case 'youtube':
      return mdiYoutube;
    case 'telegram':
      return mdiTelegram;
    default:
      return mdiWeb;
  }
}

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

const UL = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  li {
    list-style: none;
    text-transform: lowercase;
    text-decoration: none;
    padding: 10px 26px;
    a {
      display:inline-block;
      vertical-align:middle;
      text-decoration: none;
      svg {
        display:inline-block;
        vertical-align:middle;
      }
    }
  }
`;

interface UserInfo {
  city: string;
  languages: Array<string>;
  social: Array<{label: string, link: string}>;
}

const Profile: React.FC = () => {
   const { dispatch, state } = useContext(StoreCTX);
   const [loading, setLoading] = useState(false);
   const [userProfile, setProfile] = useState<UserInfo|null>(null);
   const { userId } = state;

   useEffect(() => {
    let ignore = false;

    const fetchData = async() => {
      setLoading(true);
      let response;
      try {
        response = await axios(
          // eslint-disable-next-line
          "https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/" + userId
        );
      } catch (error) {
        setLoading(false);
      }
      if (response) {
        const { status, data } = response.data;
        if (!ignore) { setProfile(data) }
        if (!ignore) { setLoading(false) }

        //user not found - logout user
        if ( status === 'err'){
            if (!ignore) {
            dispatch({type:'LOGOUT'});
            }
        }
      }
    }
    fetchData();
    return () => {
      ignore = true
    }

    // eslint-disable-next-line
  }, []);

  return <Container>
              {loading?<Spinner height={'40px'} width={'40px'} border={'8px'}/>:null}
              <h1>Мой профиль</h1>
              {userProfile&&<>
              <span>Город:&nbsp;{userProfile.city}</span>
              <span>Знание языков:</span>
              <ul>
                {userProfile.languages.map((lang)=>(<li key={lang}>{lang}</li>))}
              </ul>
              <span>Ссылки:</span>
              <UL>
                {userProfile.social.filter(({label})=>label==='web')
                .concat(userProfile.social.filter(({label})=>label!=='web'))
                .map((item)=>(<li key={item.link}>
                                  <a href={item.link} target='_blank' rel='noopener noreferrer'>
                                        <Icon path={selectIcon(item.label)} title={item.label} size={1} />
                                        {item.label}
                                  </a>
                              </li>))}
              </UL>
              </>}

          </Container>

}

export default Profile;
