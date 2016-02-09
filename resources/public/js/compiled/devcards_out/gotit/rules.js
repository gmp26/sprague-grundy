// Compiled by ClojureScript 1.7.170 {}
goog.provide('gotit.rules');
goog.require('cljs.core');
gotit.rules.env = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),(23),new cljs.core.Keyword(null,"limit","limit",-1355822363),(4)], null));
/**
 * The rules define the possible next states for the given settings - a derefed environment, and
 *   the single state variable n.
 */
gotit.rules.rules = (function gotit$rules$rules(settings,n){
var possible_moves = cljs.core.range.call(null,(1),((function (){var x__17143__auto__ = (new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(settings) - n);
var y__17144__auto__ = new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(settings);
return ((x__17143__auto__ < y__17144__auto__) ? x__17143__auto__ : y__17144__auto__);
})() + (1)));
return cljs.core.map.call(null,((function (possible_moves){
return (function (p1__20811_SHARP_){
return (n + p1__20811_SHARP_);
});})(possible_moves))
,possible_moves);
});

//# sourceMappingURL=rules.js.map?rel=1455035931946