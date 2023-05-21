import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoresGateway } from '../domain/models/stores/gateway/stores-gateway';
import { StoresDelayService } from '../infraestructure/services/stores/delay/stores-delay.service';
import { LoadingPageComponent } from '../UI/components/loading-page/loading-page.component';
import { LoadingPageService } from '../infraestructure/services/loading-page/loading-page.service';
import { LoaderInterceptor } from './interceptor/loading-page.interceptor';

export const providersGatewayDelay = [
  LoadingPageService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  },
  {
    provide: StoresGateway,
    useClass: StoresDelayService,
  },
];
