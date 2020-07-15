import { Component, OnInit, Input, Inject, LOCALE_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Options } from 'ng5-slider';
import { HeaderService } from '../../../../header.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venue-result-ui',
  templateUrl: './venue-result-ui.component.html',
  styleUrls: ['./venue-result-ui.component.scss']
})
export class VenueResultUiComponent implements OnInit {
  _options = {
    floor: 10,
    ceil: 200,
    showSelectionBar: true,
  };

  _Price_options = {
    floor: 50,
    ceil: 300,
    showSelectionBar: true,
  };

  IsDisplay = false;
  IsDistrict = false;
  IsCapacity = false;
  Price = false;
  dir = 'ltr';
  private store = new BehaviorSubject(this._options);
  public options$ = this.store.asObservable();

  private storePrice = new BehaviorSubject(this._Price_options);
  public optionsPrice$ = this.storePrice.asObservable();

  public date = new FormControl(new Date());
  public serializedDate = new FormControl((new Date()).toISOString());
  public date3: Date;
  public type = 'vertical';
  public initial_capacity;
  public initial_price_min_value;
  public initial_price_max_value;
  // public Thetype = 'NotOpen';
  // public thisType = 'OnChange';
  Tistype = 'active';
  Thistype = 'THEactive';

  private _state;
  public result = null;
  public business_types = null;
  public capacity = null;
  public neighborhood = null;
  public fits_with = null;
  public price = null;
  public searchDate = null;

  public filters = {
    package: false,
    offer: false,
    business_types: null,
    neighborhood: null,
    fits_with: null,
    capacity: null,
    min_price: null,
    max_price: null,
    sort: null
  };
  public active_filters = {
    package: false,
    offer: false,
    business_types: null,
    neighborhood: null,
    fits_with: null,
    capacity: null,
    min_price: null,
    max_price: null,
    sort: null
  };

  public active_searchData = {
    'search': null,
    'category': null,
    'city': null
  }

  public active_page;
  public active_page_size;
  //pagination 
  public per_page = null;
  public current_page = null;
  public total = null;

  public _valueBusinessTypes = [];
  public _valueNeighborhood = [];
  public _valueFitsWith = [];

  public start_business = true;
  public start_fits = true;
  public start_neighborhood = true;

  private _cities;
  public city;

  @Input() set cities_categories(value) {
    this._cities = value;
    if (value.cities) {
      this.city = value.cities.find(obj => obj.key == this.active_searchData.city).name;
    }
  }

  @Input() set result_venue_state(value) {
    this._state = value;

    this.check_not_found_filters();

    //result
    if (value.business_types) {
      this.business_types = this.result_venue_state.business_types;
    }
    if (value.capacity) {
      this.capacity = this.result_venue_state.capacity;
      const floor = this.result_venue_state.capacity.min;
      const ceil = this.result_venue_state.capacity.max;
      const showSelectionBar = true;
      this.updateState({ ...this._options, floor, ceil, showSelectionBar });
    }

    if (value.price) {
      this.price = this.result_venue_state.price;
      const floor = this.result_venue_state.price.min;
      const ceil = this.result_venue_state.price.max;
      const showSelectionBar = true;
      this.updatePriceState({ ...this._Price_options, floor, ceil, showSelectionBar });

    }

    if (value.neighborhood) {
      this.neighborhood = this.result_venue_state.neighborhood;
    }
    if (value.fits_with) {
      this.fits_with = this.result_venue_state.fits_with;
    }
    if (value.result) {
      this.result = this.result_venue_state.result;
    } else {
      this.result = [];
    }
    if (value.searchDate) {
      this.searchDate = this.result_venue_state.searchDate;
    }
    if (value.per_page) {
      this.per_page = this.result_venue_state.per_page;
    }
    if (value.current_page) {
      this.current_page = this.result_venue_state.current_page;
    }
    if (value.total) {
      this.total = this.result_venue_state.total;
    }
  }

  constructor(@Inject(LOCALE_ID) public lang: string, private headerService: HeaderService, private router: Router, private route: ActivatedRoute) {
    this.check_found_filters();
    this.check_search_data();
    this.check_not_found_filters();

    this.headerService.search_result(this.active_searchData, this.active_page, this.active_page_size);

    setTimeout(() => {
      this.headerService.filter_search_result(this.active_searchData, this.active_page, this.active_page_size, this.active_filters);
      this.set_found_filters();
      this.filters = this.active_filters;
    }, 1000);
  }

  ngOnInit(): void {
    if (this.lang === 'ar') {
      this.dir = 'rtl';
    } else {
      this.dir = 'ltr';
    }
  }

  set_capacity() {
    this.filters.capacity = this.initial_capacity;
    this.filter();
  }

  set_price() {
    this.filters.min_price = this.initial_price_min_value;
    this.filters.max_price = this.initial_price_max_value;
    this.filter();
  }

  getPage(page: number) {
    this.check_not_found_filters();
    this.headerService.filter_search_result(this.active_searchData, page, 30, this.filters)
  }

  filter() {
    this.headerService.filter_search_result(this.active_searchData, this.current_page, 30, this.filters)
  }

  set_neighborhood(e) {
    const updatedArray = this._valueNeighborhood;
    if (e.target.checked) {
      updatedArray.push(e.target.value);
      this._valueNeighborhood = updatedArray;
    } else {
      let index = this._valueNeighborhood.indexOf(e.target.value)
      if (index > -1) {
        this._valueNeighborhood.splice(index, 1);
      }
    }
    this.filters.neighborhood = JSON.stringify(updatedArray);

    if (this._valueNeighborhood.length > 0 && this._valueNeighborhood.length != this.neighborhood.length) {
      this.start_neighborhood = false;
    } else if (this._valueNeighborhood.length == this.neighborhood.length) {
      this.start_neighborhood = true;
    } else {
      this.start_neighborhood = true;
    }
  }

  set_business_types(e) {
    const updatedArray = this._valueBusinessTypes;
    if (e.target.checked) {
      updatedArray.push(e.target.value);
      this._valueBusinessTypes = updatedArray;
    } else {
      let index = this._valueBusinessTypes.indexOf(e.target.value)
      if (index > -1) {
        this._valueBusinessTypes.splice(index, 1);
      }
    }
    this.filters.business_types = JSON.stringify(updatedArray);

    if (this._valueBusinessTypes.length > 0 && this._valueBusinessTypes.length != this.business_types.length) {
      this.start_business = false;
    } else if (this._valueBusinessTypes.length == this.business_types.length) {
      this.start_business = true;
    } else {
      this.start_business = true;
    }
  }

  set_fits_with(checkboxId) {

    var index = this._valueFitsWith.indexOf(checkboxId);
    if (index > -1) {
      this._valueFitsWith.splice(index, 1);
    } else {
      this._valueFitsWith.push(checkboxId);
    }

    this.filters.fits_with = JSON.stringify(this._valueFitsWith);
    if (this._valueFitsWith.length > 0) {
      this.start_fits = false;
    } else {
      this.start_fits = true;
    }
    this.filter();
  }

  check_found_filters() {
    if (this.route.snapshot.queryParams.package) {
      var packages = this.route.snapshot.queryParams.package;
    }
    if (this.route.snapshot.queryParams.offer) {
      var offer = this.route.snapshot.queryParams.offer;
    }
    if (this.route.snapshot.queryParams.business_types) {
      var business_types = this.route.snapshot.queryParams.business_types;
    }
    if (this.route.snapshot.queryParams.fits_with) {
      var fits_with = this.route.snapshot.queryParams.fits_with;
      this.filters.fits_with = JSON.parse(fits_with);
    }
    if (this.route.snapshot.queryParams.sortDirection) {
      var sort = this.route.snapshot.queryParams.sortDirection;
      this.filters.sort = sort;
      this.active_filters.sort = sort;
    }
    if (this.route.snapshot.queryParams.capacity) {
      var capacity = this.route.snapshot.queryParams.capacity;
    }
    if (this.route.snapshot.queryParams.neighborhood) {
      var neighborhood = this.route.snapshot.queryParams.neighborhood;
    }

    if (this.route.snapshot.queryParams.min_price) {
      var min_price = this.route.snapshot.queryParams.min_price;
    }
    if (this.route.snapshot.queryParams.max_price) {
      var max_price = this.route.snapshot.queryParams.max_price;
    }

    this.active_filters = {
      package: packages,
      offer: offer,
      business_types: business_types,
      neighborhood: neighborhood,
      fits_with: fits_with,
      capacity: capacity,
      sort: sort,
      min_price: min_price,
      max_price: max_price
    }
  }

  check_not_found_filters() {
    //filters
    if (!this.route.snapshot.queryParams.business_types) {
      this._valueBusinessTypes = this.business_types?.map(opt => { return opt.id.toString() });
      this.filters.business_types = JSON.stringify(this.business_types?.map(opt => { return opt.id.toString() }));
      this.start_business = true;
    }

    if (!this.route.snapshot.queryParams.neighborhood) {
      this._valueNeighborhood = this.neighborhood?.map(opt => { return opt.id.toString() });
      this.filters.neighborhood = JSON.stringify(this.neighborhood?.map(opt => { return opt.id.toString() }));
      this.start_neighborhood = true;
    }

    if (!this.route.snapshot.queryParams.fits_with) {
      this._valueFitsWith = [];
      this.filters.fits_with = null;
      this.start_fits = true;
    }

    if (!this.route.snapshot.queryParams.package) {
      this.filters.package = false;
    }
    if (!this.route.snapshot.queryParams.offer) {
      this.filters.offer = false;
    }

    if (!this.route.snapshot.queryParams.sortDirection) {
      this.filters.sort = "null";
    }

    if (!this.route.snapshot.queryParams.capacity) {
      this.filters.capacity = null;
    }
    if (!this.route.snapshot.queryParams.min_price) {
      this.filters.min_price = null;
    }
    if (!this.route.snapshot.queryParams.max_price) {
      this.filters.max_price = null;
    }
  }

  check_search_data() {
    //search
    if (this.route.snapshot.queryParams.text) {
      var text = this.route.snapshot.queryParams.text;
    }
    if (this.route.snapshot.queryParams.city) {
      var city = this.route.snapshot.queryParams.city;
    }
    if (this.route.snapshot.queryParams.page) {
      var page = this.route.snapshot.queryParams.page;
    }
    if (this.route.snapshot.queryParams.page_size) {
      var page_size = this.route.snapshot.queryParams.page_size;
    }
    if (window.location.pathname.indexOf('venue') > -1) {
      var category = 1;
    } else if (window.location.pathname.indexOf('catering') > -1) {
      var category = 2;
    }

    this.active_page = page;
    this.active_page_size = page_size;

    this.active_searchData = {
      'search': text,
      'category': category,
      'city': city
    }

    console.log(window.location.pathname.indexOf('venue'));

  }

  set_found_filters() {
    this._valueBusinessTypes = this.active_filters.business_types ? JSON.parse(this.active_filters.business_types) : [];
    this._valueNeighborhood = this.active_filters.neighborhood ? JSON.parse(this.active_filters.neighborhood) : [];
    this._valueFitsWith = this.active_filters.fits_with ? JSON.parse(this.active_filters.fits_with) : [];
    this.initial_capacity = this.active_filters.capacity ?? 1000;
    this.initial_price_min_value = this.active_filters.min_price ?? 1;
    this.initial_price_max_value = this.active_filters.max_price ?? 10000;

    this.start_business = this.active_filters.business_types ? false : true;
    this.start_fits = this.active_filters.fits_with ? false : true;
    this.start_neighborhood = this.active_filters.neighborhood ? false : true;
  }

  get result_venue_state() {
    return this._state;
  }

  get cities_categories() {
    return this._cities;
  }

  updateState(currentState) {
    this.store.next((this._options = currentState));
  }

  updatePriceState(currentState) {
    this.storePrice.next((this._Price_options = currentState));
  }
  TheDisplay() {
    this.IsDisplay = !this.IsDisplay;
  }
  theDistrict() {
    this.IsDistrict = !this.IsDistrict;
  }
  theCapacity() {
    this.IsCapacity = !this.IsCapacity;
  }
  thePrice() {
    this.Price = !this.Price;
  }
}
