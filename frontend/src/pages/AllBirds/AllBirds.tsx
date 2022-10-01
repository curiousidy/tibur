import { IonButtons, IonCard , IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getInformation } from '../../services/bird_services';
import { loadBirds } from '../../redux/slices/bird_slice';
import { useHistory } from 'react-router-dom';

import { RootState } from '../../redux/store';

const AllBirds: React.FC = () => {
    
    

    const dispatch = useDispatch();
    let { birds } = useSelector((state:RootState) => state.birdState);
    const [loading, setLoading] = useState(true);

    let history = useHistory();

        
    useEffect(() => {
                
                 getInformation('api/birds').then(function(response) {
                    
                    return response.json();
                  })
                  .then(function(dataBird){
                 
                    dispatch(loadBirds(dataBird));
                    setLoading(false);
                  })
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
   
    
  return (
    

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>All Birds</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <IonGrid>
                            {  
                               birds.map((birdie,index:number) => (
                                <IonRow key={index}>
                                    <IonCol className="ion-text-center">
                                   
                                    <IonCard onClick={() => { 
                                        history.push(`/bird-details/${birdie.id}`)
                                        
                                    } }>
                                            <img src='/assets/images/enconstruccion.png' alt="bird"/>
                                            <IonCardHeader>
                                                <IonCardTitle>{birdie.name}</IonCardTitle>
                                            </IonCardHeader>
                                    </IonCard>
                                  
                                    
                                    </IonCol>
                                </IonRow>
                                ))
                            }
            </IonGrid>
            </IonContent>
        </IonPage>
        )
}

export default AllBirds