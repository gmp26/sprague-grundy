// Compiled by ClojureScript 1.7.170 {}
goog.provide('sprague_grundy.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * return the minimum excludant - the first number n in (range) such that (not (p n))
 * usually, the predicate p determines whether n is a member of a set of integers.
 */
sprague_grundy.core.mex = (function sprague_grundy$core$mex(var_args){
var args20488 = [];
var len__17863__auto___20491 = arguments.length;
var i__17864__auto___20492 = (0);
while(true){
if((i__17864__auto___20492 < len__17863__auto___20491)){
args20488.push((arguments[i__17864__auto___20492]));

var G__20493 = (i__17864__auto___20492 + (1));
i__17864__auto___20492 = G__20493;
continue;
} else {
}
break;
}

var G__20490 = args20488.length;
switch (G__20490) {
case 1:
return sprague_grundy.core.mex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sprague_grundy.core.mex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20488.length)].join('')));

}
});

sprague_grundy.core.mex.cljs$core$IFn$_invoke$arity$1 = (function (p){
return sprague_grundy.core.mex.call(null,p,(0));
});

sprague_grundy.core.mex.cljs$core$IFn$_invoke$arity$2 = (function (p,n){

var m = n;
while(true){
if(cljs.core.truth_(p.call(null,m))){
var G__20495 = (m + (1));
m = G__20495;
continue;
} else {
return m;
}
break;
}
});

sprague_grundy.core.mex.cljs$lang$maxFixedArity = 2;
/**
 * return a list of possible next states
 */
sprague_grundy.core.next_states = (function sprague_grundy$core$next_states(state){
return cljs.core.List.EMPTY;
});
/**
 * true if the game is finished
 */
sprague_grundy.core.end_state_QMARK_ = (function sprague_grundy$core$end_state_QMARK_(state){
return true;
});
/**
 * calculate the nimber of a game based on the possible game transitions (the rules)
 * and the current state
 */
sprague_grundy.core.nimber = (function sprague_grundy$core$nimber(possible_transitions,state){
if(cljs.core.truth_(sprague_grundy.core.end_state_QMARK_.call(null,state))){
return (0);
} else {
return sprague_grundy.core.mex.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,sprague_grundy$core$nimber,possible_transitions.call(null,state))));
}
});

//# sourceMappingURL=core.js.map?rel=1455031742834