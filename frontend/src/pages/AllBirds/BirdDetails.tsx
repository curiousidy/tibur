import { IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonCardContent, IonBackButton } from '@ionic/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';

const BirdDetails: React.FC = () => {

    let { birds } = useSelector((state:RootState) => state.birdState);
   
    let { id } = useParams<{id:string}>();

    const birdDetail = birds?.find(  birdie  => id.toString() === birdie?.id?.toString())
    
    
  return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Bird Details</IonTitle>
                    <IonButtons slot="end">
                        <IonBackButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
            <IonGrid>
                                {  birdDetail && 
                                        <IonRow key={birdDetail.id}>
                                            <IonCol className="ion-text-center">
                                                <IonCard>
                                                    <img src='/assets/images/enconstruccion.png' alt="bird"/>
                                                    <IonCardHeader>
                                                        <IonCardTitle>{birdDetail.name}</IonCardTitle>
                                                    </IonCardHeader>
                                                    <IonCardContent>
                                                        <p>{birdDetail.power}</p>
                                                        <p>{birdDetail.genre}</p>
                                                        <p>{birdDetail.size}</p>
                                                        <p>{birdDetail.scope}</p>
                                                    </IonCardContent>
                                                </IonCard>
                                            </IonCol>
                                        </IonRow>
                                }
            </IonGrid>
            </IonContent>
            
        </IonPage>
        )
}

export default BirdDetails