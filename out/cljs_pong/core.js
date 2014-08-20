// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.core');
goog.require('cljs.core');
goog.require('cljs_pong.keyhandler');
goog.require('cljs_pong.keyhandler');
goog.require('cljs_pong.game');
goog.require('cljs_pong.game');
goog.require('cljs_pong.draw');
goog.require('cljs_pong.draw');
cljs.core.enable_console_print_BANG_.call(null);
cljs_pong.core.schedule = (function schedule(f){return requestAnimationFrame(f);
});
cljs_pong.core.game_loop = (function game_loop(state){var new_state = cljs_pong.game.update_state.call(null,state,cljs_pong.keyhandler.get_player_actions.call(null));cljs_pong.draw.draw_game.call(null,new_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",2564688177).cljs$core$IFn$_invoke$arity$1(new_state)))
{return cljs_pong.core.schedule.call(null,(function (){return game_loop.call(null,new_state);
}));
} else
{return null;
}
});
cljs_pong.core.start_game = (function start_game(){return cljs_pong.core.game_loop.call(null,cljs_pong.game.initial_state);
});
cljs_pong.keyhandler.register_key_handlers.call(null);
cljs_pong.core.start_game.call(null);

//# sourceMappingURL=core.js.map