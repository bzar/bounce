// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.keyhandler');
goog.require('cljs.core');
cljs_pong.keyhandler.player_action = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",2893176759),new cljs.core.Keyword(null,"none","none",1017291434),new cljs.core.Keyword(null,"player-2","player-2",2893176760),new cljs.core.Keyword(null,"none","none",1017291434)], null));
cljs_pong.keyhandler.key_code_to_action = (function key_code_to_action(key_code){var G__4802 = key_code;if(cljs.core._EQ_.call(null,76,G__4802))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-2","player-2",2893176760),new cljs.core.Keyword(null,"down","down",1016993812)], null);
} else
{if(cljs.core._EQ_.call(null,80,G__4802))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-2","player-2",2893176760),new cljs.core.Keyword(null,"up","up",1013907981)], null);
} else
{if(cljs.core._EQ_.call(null,65,G__4802))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-1","player-1",2893176759),new cljs.core.Keyword(null,"down","down",1016993812)], null);
} else
{if(cljs.core._EQ_.call(null,81,G__4802))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-1","player-1",2893176759),new cljs.core.Keyword(null,"up","up",1013907981)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"unknown","unknown",729063356);
} else
{return null;
}
}
}
}
}
});
cljs_pong.keyhandler.key_down = (function key_down(key_code){var action = cljs_pong.keyhandler.key_code_to_action.call(null,key_code);if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unknown","unknown",729063356),action)))
{return cljs.core.swap_BANG_.call(null,cljs_pong.keyhandler.player_action,cljs.core.conj,action);
} else
{return null;
}
});
cljs_pong.keyhandler.key_up = (function key_up(key_code){var action = cljs_pong.keyhandler.key_code_to_action.call(null,key_code);var player = cljs.core.first.call(null,action);var current_player_action = cljs.core.get.call(null,cljs.core.deref.call(null,cljs_pong.keyhandler.player_action),player);var key_up_player_action = cljs.core.last.call(null,action);if(cljs.core._EQ_.call(null,current_player_action,key_up_player_action))
{return cljs.core.swap_BANG_.call(null,cljs_pong.keyhandler.player_action,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,new cljs.core.Keyword(null,"none","none",1017291434)], null));
} else
{return null;
}
});
cljs_pong.keyhandler.get_player_actions = (function get_player_actions(){return cljs.core.deref.call(null,cljs_pong.keyhandler.player_action);
});
cljs_pong.keyhandler.register_key_handlers = (function register_key_handlers(){document.onkeydown = (function (p1__4803_SHARP_){return cljs_pong.keyhandler.key_down.call(null,p1__4803_SHARP_.keyCode);
});
return document.onkeyup = (function (p1__4804_SHARP_){return cljs_pong.keyhandler.key_up.call(null,p1__4804_SHARP_.keyCode);
});
});

//# sourceMappingURL=keyhandler.js.map