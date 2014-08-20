// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.racket');
goog.require('cljs.core');
cljs_pong.racket.distance_from_goal = 50;
cljs_pong.racket.width = 6;
cljs_pong.racket.height = 80;
cljs_pong.racket.racket = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"distance-from-goal","distance-from-goal",3812587248),50,new cljs.core.Keyword(null,"width","width",1127031096),6,new cljs.core.Keyword(null,"height","height",4087841945),80], null);
cljs_pong.racket.racket_rect = (function racket_rect(pos_x,pos_y){return cljs.core.assoc.call(null,cljs_pong.racket.racket,new cljs.core.Keyword(null,"x","x",1013904362),(pos_x - (new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs_pong.racket.racket) / 2)),new cljs.core.Keyword(null,"y","y",1013904363),(pos_y - (cljs_pong.racket.height / 2)),new cljs.core.Keyword(null,"pos-y","pos-y",1120757426),pos_y);
});
cljs_pong.racket.move_racket_rect = (function move_racket_rect(racket,pos_y){return cljs.core.assoc.call(null,racket,new cljs.core.Keyword(null,"y","y",1013904363),(pos_y - (cljs_pong.racket.height / 2)),new cljs.core.Keyword(null,"pos-y","pos-y",1120757426),pos_y);
});
cljs_pong.racket.racket_bottom_y = (function racket_bottom_y(racket){return (new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(racket) + new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(racket));
});
cljs_pong.racket.new_racket_position = (function new_racket_position(f,racket){return cljs_pong.racket.move_racket_rect.call(null,racket,f.call(null,new cljs.core.Keyword(null,"pos-y","pos-y",1120757426).cljs$core$IFn$_invoke$arity$1(racket),3));
});
cljs_pong.racket.move_racket_up = (function move_racket_up(racket){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(racket) > 0))
{return cljs_pong.racket.new_racket_position.call(null,cljs.core._,racket);
} else
{return racket;
}
});
cljs_pong.racket.move_racket_down = (function move_racket_down(racket){var bottom_y = (new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(racket) + cljs_pong.racket.height);if((cljs_pong.racket.racket_bottom_y.call(null,racket) < 800))
{return cljs_pong.racket.new_racket_position.call(null,cljs.core._PLUS_,racket);
} else
{return racket;
}
});
cljs_pong.racket.move_racket = (function move_racket(racket,action){var G__4804 = action;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__4804))
{return cljs_pong.racket.new_racket_position.call(null,cljs.core._PLUS_,racket);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__4804))
{return cljs_pong.racket.move_racket_up.call(null,racket);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return racket;
} else
{return null;
}
}
}
});

//# sourceMappingURL=racket.js.map