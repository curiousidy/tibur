import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Redirect, Route } from 'react-router-dom';

import {eggOutline, newspaperOutline} from 'ionicons/icons';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import AllBirds from './pages/AllBirds/AllBirds';
import BirdDetails from './pages/AllBirds/BirdDetails';
import ModifyBird from './pages/ModifyBird/ModifyBird';



setupIonicReact();

const App: React.FC = () => (
  <Provider store={store}>
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="MenuBird">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Bird Mac</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink='/all-birds' routerDirection='none' lines='none'>
                  <IonIcon color="medium" slot='start' icon={eggOutline}/>
                  <IonLabel>All Birds</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle>
              <IonItem routerLink='/modify-bird' routerDirection='none' lines='none'>
                  <IonIcon color="medium" slot='start' icon={newspaperOutline}/>
                  <IonLabel>Modify Bird</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
          
        </IonContent>
      </IonMenu>  

  
      <IonRouterOutlet id="MenuBird">
        
        <Route path="/all-birds" component={AllBirds} exact/>
        <Route path="/modify-bird" component={ModifyBird} exact/>
        <Route path="/bird-details/:id" component={BirdDetails}/>
        <Redirect to="/all-birds"/>
      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
  </Provider>
);

export default App;
