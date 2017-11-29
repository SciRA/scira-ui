import { AbstractSearch } from './abstract-search';
import { environment } from '../../../environments/environment';
import { MockSearchService } from './mock-search.service';
import { SearchService } from './search.service';

export function searchServiceFactory() {
    console.log(environment.type);
    return environment.type === 'DEV' ? new MockSearchService() : new SearchService();
}
export let SearchProvider = {
    provide: AbstractSearch,
    useFactory: searchServiceFactory,
    deps: []
};
