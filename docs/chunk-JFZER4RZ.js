import{O as R,a as M,h as T,j as b,k as V,m as F,n as s}from "./chunk-2YYMAXML.js";import{Bb as E,Cb as c,Db as p,Eb as O,Ma as o,Na as g,Z as P,_ as j,ca as A,cb as _,eb as h,fb as v,ia as C,ib as r,ja as B,jb as a,kb as l,nb as I,oc as w,qa as k,qb as u,ra as x,rc as L,sa as d,sb as f,ta as S}from "./chunk-XADEXTWC.js";function N(i, m){if(i&1){let e=I();r(0,"div",1),u("click",function(){k(e);let n=f();return x(n.navigate())}),r(1,"div")(2,"div",2),c(3),a(),l(4,"div",3),r(5,"div",4)(6,"div",5),c(7),a(),r(8,"div",6),c(9),a()()(),r(10,"a",7),c(11," \u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435 "),a()()}if(i&2){let e=f();o(3),O(" ",e.article.category," "),o(),E("background-image: url(",e.serverStaticPath+e.article.image,")"),o(3),p(e.article.title),o(2),O(" ",e.article.description," "),o(),h("routerLink","/article/"+e.article.url)}}var X=(()=>{class i{constructor(e){this.router=e,this.serverStaticPath=s.serverStaticPath}navigate(){this.router.navigate(["/article/"+this.article.url])}static{this.\u0275fac=function(t){return new(t||i)(g(b))}}static{this.\u0275cmp=C({type:i,selectors:[["article-card"]],inputs:{article:"article"},decls:1,vars:1,consts:[["class","article-card",3,"click",4,"ngIf"],[1,"article-card",3,"click"],[1,"article-category"],[1,"article-image"],[1,"article-text"],[1,"article-title"],[1,"article-description"],[1,"article-read",3,"routerLink"]],template:function(t, n){t&1&&_(0,N,12,7,"div",0),t&2&&h("ngIf",n.article)},dependencies:[w,V],styles:[".article-card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:space-between;height:100%}.article-card[_ngcontent-%COMP%]   .article-category[_ngcontent-%COMP%]{position:absolute;top:10px;right:9px;background-color:#fff;color:#709fdc;padding:10px 18px;border-radius:5px;text-align:center}.article-card[_ngcontent-%COMP%]   .article-image[_ngcontent-%COMP%]{width:291px;height:291px;border-radius:5px;background-size:cover;background-position:center;margin-bottom:15px}.article-card[_ngcontent-%COMP%]   .article-text[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%]{font-size:20px;font-weight:500;line-height:26px;color:#709fdc;margin-bottom:20px}.article-card[_ngcontent-%COMP%]   .article-text[_ngcontent-%COMP%]   .article-description[_ngcontent-%COMP%]{line-height:18.2px}.article-card[_ngcontent-%COMP%]   .article-read[_ngcontent-%COMP%]{font-size:16px;line-height:20.8px;text-decoration:underline;color:#709fdc;margin-top:20px}"]})}}return i})();var G=(()=>{class i{constructor(e){this.http=e}getComments(e){return this.http.get(s.api+"comments",{params:e})}addComment(e, t){return this.http.post(s.api+"comments",{text:e,article:t})}applyAction(e, t){return this.http.post(s.api+"comments/"+e+"/apply-action",{action:t})}getCommentActions(e){return this.http.get(s.api+"comments/"+e+"/actions")}getArticleCommentsActions(e){return this.http.get(s.api+"comments/article-comment-actions",{params:e})}static{this.\u0275fac=function(t){return new(t||i)(A(M))}}static{this.\u0275prov=P({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function J(i, m){if(i&1){let e=I();r(0,"div",1)(1,"div",2)(2,"div",3),d(),r(3,"svg",4),l(4,"circle",5)(5,"path",6),a()(),S(),r(6,"div",7)(7,"div",8),c(8),a(),r(9,"div",9),c(10),a()()(),r(11,"div",10),c(12),a(),r(13,"div",11)(14,"div",12),u("click",function(){k(e);let n=f();return x(n.applyAction(n.comment.id,"like"))}),r(15,"span"),c(16),a(),d(),r(17,"svg",13),l(18,"path",14)(19,"path",15),a()(),S(),r(20,"div",16),u("click",function(){k(e);let n=f();return x(n.applyAction(n.comment.id,"dislike"))}),r(21,"span"),c(22),a(),d(),r(23,"svg",13),l(24,"path",17)(25,"path",18),a()(),S(),r(26,"div",19),u("click",function(){k(e);let n=f();return x(n.applyAction(n.comment.id,"violate"))}),d(),r(27,"svg",13),l(28,"path",20)(29,"path",21)(30,"path",22),a()()()()}if(i&2){let e=f();o(8),p(e.comment.user.name),o(2),p(e.comment.date),o(2),p(e.comment.text),o(3),v("active",e.comment.likeApplied),o(),p(e.comment.likesCount),o(),v("active",e.comment.likeApplied),o(4),v("active",e.comment.dislikeApplied),o(),p(e.comment.dislikesCount),o(),v("active",e.comment.dislikeApplied)}}var te=(()=>{class i{constructor(e, t){this.commentService=e,this._snackBar=t}ngOnInit(){}applyAction(e, t){t==="like"&&(this.comment.likeApplied===!0&&this.comment.likesCount>0?this.commentService.applyAction(e,t).subscribe({next:()=>{this.comment.likeApplied=!1,this.comment.likesCount--},error:()=>{this._snackBar.open("\u041E\u0448\u0438\u0431\u043A\u0430")}}):this.comment.dislikeApplied===!0&&this.comment.dislikesCount>0?this.commentService.applyAction(e,t).subscribe({next:()=>{this.comment.likeApplied=!0,this.comment.dislikeApplied=!1,this.comment.likesCount++,this.comment.dislikesCount--},error:()=>{this._snackBar.open("\u041E\u0448\u0438\u0431\u043A\u0430")}}):this.commentService.applyAction(e,t).subscribe({next:()=>{this.comment.likeApplied=!0,this.comment.likesCount++},error:()=>{this._snackBar.open("\u041E\u0448\u0438\u0431\u043A\u0430")}})),t==="dislike"&&(this.comment.dislikeApplied===!0&&this.comment.dislikesCount>0?this.commentService.applyAction(e,t).subscribe({next:()=>{this.comment.dislikeApplied=!1,this.comment.dislikesCount--},error:()=>{this._snackBar.open("\u041E\u0448\u0438\u0431\u043A\u0430")}}):this.comment.likeApplied===!0&&this.comment.likesCount>0?this.commentService.applyAction(e,t).subscribe({next:()=>{this.comment.dislikeApplied=!0,this.comment.likeApplied=!1,this.comment.likesCount--,this.comment.dislikesCount++},error:()=>{this._snackBar.open("\u041E\u0448\u0438\u0431\u043A\u0430")}}):this.commentService.applyAction(e,t).subscribe({next:()=>{this.comment.dislikeApplied=!0,this.comment.dislikesCount++},error:()=>{this._snackBar.open("\u041E\u0448\u0438\u0431\u043A\u0430")}})),t==="violate"&&this.commentService.applyAction(e,t).subscribe({next:()=>{this._snackBar.open("\u0416\u0430\u043B\u043E\u0431\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430")},error:()=>{this._snackBar.open("\u0416\u0430\u043B\u043E\u0431\u0430 \u0443\u0436\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430")}})}static{this.\u0275fac=function(t){return new(t||i)(g(G),g(R))}}static{this.\u0275cmp=C({type:i,selectors:[["app-comment"]],inputs:{comment:"comment"},decls:1,vars:1,consts:[["class","comment",4,"ngIf"],[1,"comment"],[1,"comment-header"],[1,"comment-image"],["width","44","height","45","viewBox","0 0 44 45","fill","none","xmlns","http://www.w3.org/2000/svg"],["cx","21.9751","cy","12.7368","r","11.7368","stroke","#709FDC","stroke-width","2"],["fill-rule","evenodd","clip-rule","evenodd","d","M41.942 45.0001C41.3422 34.4932 32.632 26.158 21.9749 26.158C11.3179 26.158 2.60766 34.4932 2.00789 45.0001H0.00488281C0.607003 33.388 10.2131 24.158 21.9749 24.158C33.7368 24.158 43.3429 33.388 43.945 45.0001H41.942Z","fill","#709FDC"],[1,"comment-info"],[1,"comment-name"],[1,"comment-date"],[1,"comment-text"],[1,"comment-reactions"],[1,"comment-reaction","comment-like",3,"click"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.47998 9.54997","stroke-width","1.5","stroke-miterlimit","10"],["d","M2.37988 18.35V8.55002C2.37988 7.15002 2.97988 6.65002 4.37988 6.65002H5.37988C6.77988 6.65002 7.37988 7.15002 7.37988 8.55002V18.35C7.37988 19.75 6.77988 20.25 5.37988 20.25H4.37988C2.97988 20.25 2.37988 19.75 2.37988 18.35Z","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],[1,"comment-reaction","comment-dislike",3,"click"],["d","M16.5197 5.65002L13.4197 3.25002C13.0197 2.85002 12.1197 2.65002 11.5197 2.65002H7.71973C6.51973 2.65002 5.21973 3.55002 4.91973 4.75002L2.51973 12.05C2.01973 13.45 2.91973 14.65 4.41973 14.65H8.41973C9.01973 14.65 9.51973 15.15 9.41973 15.85L8.91973 19.05C8.71973 19.95 9.31973 20.95 10.2197 21.25C11.0197 21.55 12.0197 21.15 12.4197 20.55L16.5197 14.45","stroke-width","1.5","stroke-miterlimit","10"],["d","M21.6201 5.65V15.45C21.6201 16.85 21.0201 17.35 19.6201 17.35H18.6201C17.2201 17.35 16.6201 16.85 16.6201 15.45V5.65C16.6201 4.25 17.2201 3.75 18.6201 3.75H19.6201C21.0201 3.75 21.6201 4.25 21.6201 5.65Z","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],[1,"comment-spam",3,"click"],["d","M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z","stroke","#071739","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["d","M12 8V13","stroke","#071739","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["d","M11.9946 16H12.0036","stroke","#071739","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"]],template:function(t, n){t&1&&_(0,J,31,13,"div",0),t&2&&h("ngIf",n.comment)},dependencies:[w]})}}return i})();var H=class{static processParams(m){let e={categories:[]};return m.hasOwnProperty("categories")&&(e.categories=Array.isArray(m.categories)?m.categories:[m.categories]),m.hasOwnProperty("page")&&(e.page=+m.page),e}};function K(i, m){i&1&&(d(),r(0,"svg",4),l(1,"path",5),a())}function Q(i, m){i&1&&(d(),r(0,"svg",6),l(1,"path",7),a())}var oe=(()=>{class i{constructor(e, t){this.router=e,this.activatedRoute=t,this.activeParams={categories:[]},this.filterApplied=!1}ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{if(this.activeParams=H.processParams(e),this.activeParams.categories){let t=this.activeParams.categories.find(n=>n===this.category.url);t?this.filterApplied=!0:t||(this.filterApplied=!1)}})}updateFilterParam(e){if(this.activeParams.categories&&this.activeParams.categories.length>0){let t=this.activeParams.categories.find(n=>n===e);t?(this.activeParams.categories=this.activeParams.categories.filter(n=>n!==e),this.activeParams.page=1,this.filterApplied=!1):t||(this.activeParams.categories=[...this.activeParams.categories,e],this.filterApplied=!0)}else this.activeParams.categories=[e],this.activeParams.page=1,this.filterApplied=!0;this.router.navigate(["/blog"],{queryParams:this.activeParams})}static{this.\u0275fac=function(t){return new(t||i)(g(b),g(T))}}static{this.\u0275cmp=C({type:i,selectors:[["sorting-item"]],inputs:{category:"category",categories:"categories"},decls:5,vars:5,consts:[["routerLink","/blog",1,"blog-sorting-item",3,"click"],[1,"category-name"],["width","12","height","11","viewBox","0 0 12 11","fill","none","xmlns","http://www.w3.org/2000/svg",4,"ngIf"],["width","7","height","3","viewBox","0 0 7 3","fill","none","xmlns","http://www.w3.org/2000/svg",4,"ngIf"],["width","12","height","11","viewBox","0 0 12 11","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M11.12 4.904H6.656V0.511999H5.144V4.904H0.68V6.32H5.144V10.688H6.656V6.32H11.12V4.904Z","fill","#BEBEBE"],["width","7","height","3","viewBox","0 0 7 3","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M0.44 2.24H6.728V0.752H0.44V2.24Z","fill","#071739"]],template:function(t, n){t&1&&(r(0,"div",0),u("click",function(){return n.updateFilterParam(n.category.url)}),r(1,"div",1),c(2),a(),_(3,K,2,0,"svg",2)(4,Q,2,0,"svg",3),a()),t&2&&(o(),v("active",n.filterApplied),o(),p(n.category.name),o(),h("ngIf",!n.filterApplied),o(),h("ngIf",n.filterApplied))},dependencies:[w,V],styles:[".blog-sorting-item[_ngcontent-%COMP%]{cursor:pointer;margin-bottom:19px;display:flex;justify-content:space-between;align-items:center}.blog-sorting-item[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{font-size:16px;line-height:20.8px;color:#bebebe;text-decoration:none}.blog-sorting-item[_ngcontent-%COMP%]   .category-name.active[_ngcontent-%COMP%], .blog-sorting-item.active[_ngcontent-%COMP%]{color:#071739}"]})}}return i})();var ue=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=B({type:i})}static{this.\u0275inj=j({imports:[L,F]})}}return i})();var Ce=(()=>{class i{constructor(e){this.http=e}getPopularArticles(){return this.http.get(s.api+"articles/top")}getArticles(e){return this.http.get(s.api+"articles",{params:e})}getArticle(e){return this.http.get(s.api+"articles/"+e)}getRelatedArticles(e){return this.http.get(s.api+"articles/related/"+e)}static{this.\u0275fac=function(t){return new(t||i)(A(M))}}static{this.\u0275prov=P({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{Ce as a,X as b,H as c,oe as d,G as e,te as f,ue as g};
