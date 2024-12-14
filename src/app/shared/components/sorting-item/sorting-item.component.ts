import {Component, Input, OnInit} from '@angular/core';
import {CategoryType} from "../../../../types/category.type";
import {ActivatedRoute, Router} from "@angular/router";
import {ActiveParamsType} from "../../../../types/active-params.type";
import {ActiveParamsUtil} from "../../utils/active.params.util";

@Component({
  selector: 'sorting-item',
  templateUrl: './sorting-item.component.html',
  styleUrl: './sorting-item.component.scss'
})

export class SortingItemComponent implements OnInit {

  @Input() category!: CategoryType;
  @Input() categories!: CategoryType[];
  activeParams: ActiveParamsType = {categories: []};
  filterApplied: boolean = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.activeParams = ActiveParamsUtil.processParams(params);

      if (this.activeParams.categories) {
        const existingCategoryInParams = this.activeParams.categories.find(item => item === this.category.url);

        if (existingCategoryInParams) {
          this.filterApplied = true;
        } else if (!existingCategoryInParams) {
          this.filterApplied = false;
        }
      }
    });
  }

  updateFilterParam(url: string) {
    if (this.activeParams.categories && this.activeParams.categories.length > 0) {
      const existingCategoryInParams = this.activeParams.categories.find(item => item === url);

      if (existingCategoryInParams) {
        this.activeParams.categories = this.activeParams.categories.filter(item => item !== url);
        this.activeParams.page = 1;
        this.filterApplied = false;

      } else if (!existingCategoryInParams) {
        this.activeParams.categories = [...this.activeParams.categories, url];
        this.filterApplied = true;
      }
    } else {
      this.activeParams.categories = [url];
      this.activeParams.page = 1;
      this.filterApplied = true;
    }

    this.router.navigate(['/blog'], {
      queryParams: this.activeParams
    });
  }

}
