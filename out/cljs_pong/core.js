// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.core');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('cljs_pong.keyhandler');
goog.require('cljs_pong.keyhandler');
goog.require('cljs_pong.game');
goog.require('cljs_pong.game');
goog.require('cljs_pong.draw');
goog.require('cljs_pong.draw');
cljs_pong.core.game_in_progress = cljs.core.atom.call(null,false);
cljs.core.enable_console_print_BANG_.call(null);
cljs_pong.core.schedule = (function schedule(f){return requestAnimationFrame(f);
});
cljs_pong.core.game_loop = (function game_loop(state){var new_state = cljs_pong.game.update_state.call(null,state,cljs_pong.keyhandler.get_player_actions.call(null));cljs_pong.draw.draw_game.call(null,new_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",2564688177).cljs$core$IFn$_invoke$arity$1(new_state)))
{return cljs_pong.core.schedule.call(null,(function (){return game_loop.call(null,new_state);
}));
} else
{cljs.core.reset_BANG_.call(null,cljs_pong.core.game_in_progress,false);
dommy.core.show_BANG_.call(null,document.getElementById("top-message"));
return dommy.core.remove_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,document.getElementById("message"),"GAME OVER"),new cljs.core.Keyword(null,"hidden","hidden",4091384092));
}
});
cljs_pong.core.count_down = (function count_down(n,start_msg,f){var msg = document.getElementById("message");if((n > 0))
{dommy.core.set_text_BANG_.call(null,dommy.core.remove_class_BANG_.call(null,msg,new cljs.core.Keyword(null,"hidden","hidden",4091384092)),n);
return setTimeout((function (){return count_down.call(null,(n - 1),start_msg,f);
}),1000);
} else
{dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,msg,start_msg),new cljs.core.Keyword(null,"hidden","hidden",4091384092));
return f.call(null);
}
});
cljs_pong.core.start_game = (function start_game(){if(cljs.core.not.call(null,cljs.core.deref.call(null,cljs_pong.core.game_in_progress)))
{dommy.core.hide_BANG_.call(null,document.getElementById("top-message"));
cljs.core.reset_BANG_.call(null,cljs_pong.core.game_in_progress,true);
return cljs_pong.core.count_down.call(null,3,"GO",(function (){return cljs_pong.core.game_loop.call(null,cljs_pong.game.initial_state);
}));
} else
{return null;
}
});
cljs_pong.draw.draw_game.call(null,cljs_pong.game.initial_state);
cljs_pong.keyhandler.register_key_handlers.call(null,cljs_pong.core.start_game);

//# sourceMappingURL=core.js.map