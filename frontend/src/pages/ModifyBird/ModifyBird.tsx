import {IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react'
import React, {  useState } from 'react'
import FormBird from '../../components/FormBird';


const ModifyBird: React.FC = () => {

  
  const [selectedItem, setSelectedItem] = useState('');

  const handleSegmentChange = (e: any) => {
    setSelectedItem(e.detail.value);
  };
  
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
              <IonButtons slot='start'>
                <IonMenuButton/>
              </IonButtons>
                <IonTitle>Modify Bird</IonTitle>

                <IonButtons slot='end'>
                  <IonBackButton  defaultHref="/all-birds"/>
                </IonButtons>
                
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonSegment onIonChange={(e) => handleSegmentChange(e)}>
                            <IonSegmentButton value='addbird' >
                                <IonLabel>Add Bird</IonLabel>
                            </IonSegmentButton>

                            <IonSegmentButton value='updatebird'>
                                <IonLabel>Update Bird</IonLabel>
                            </IonSegmentButton>

                            <IonSegmentButton value='deletebird'>
                                <IonLabel>Delete Bird</IonLabel>
                            </IonSegmentButton>
                            
                        </IonSegment>
                    </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <FormBird selectedItem={selectedItem}/>
                  </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
  )
}

export default ModifyBird;