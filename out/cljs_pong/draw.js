// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.draw');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('cljs_pong.config');
goog.require('cljs_pong.config');
cljs_pong.draw.draw_color = "rgba(213, 115, 230, 1)";
cljs_pong.draw.draw_surface = (function (){var canvas = document.getElementById("canvas");var ctx = canvas.getContext("2d");ctx.fillStyle = cljs_pong.draw.draw_color;
ctx.strokeStyle = cljs_pong.draw.draw_color;
return ctx;
})();
cljs_pong.draw.set_line_width_BANG_ = (function set_line_width_BANG_(w){return cljs_pong.draw.draw_surface.lineWidth = w;
});
cljs_pong.draw.clear = (function clear(){return cljs_pong.draw.draw_surface.clearRect(0,0,new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field));
});
cljs_pong.draw.draw_court = (function draw_court(){cljs_pong.draw.set_line_width_BANG_.call(null,2);
cljs_pong.draw.draw_surface.beginPath();
cljs_pong.draw.draw_surface.moveTo((new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field) / 2),0);
cljs_pong.draw.draw_surface.lineTo((new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field) / 2),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field));
cljs_pong.draw.draw_surface.stroke();
cljs_pong.draw.draw_surface.closePath();
cljs_pong.draw.set_line_width_BANG_.call(null,5);
return cljs_pong.draw.draw_surface.strokeRect(0,0,new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field));
});
cljs_pong.draw.draw_ball = (function draw_ball(ball){cljs_pong.draw.set_line_width_BANG_.call(null,1);
cljs_pong.draw.draw_surface.beginPath();
var x_5267 = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(ball);var y_5268 = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(ball);var r_5269 = new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(ball);var arc_start_5270 = 0;var arc_length_5271 = (2 * Math.PI);cljs_pong.draw.draw_surface.arc(x_5267,y_5268,r_5269,arc_start_5270,arc_length_5271);
cljs_pong.draw.draw_surface.fill();
return cljs_pong.draw.draw_surface.closePath();
});
cljs_pong.draw.draw_paddle = (function draw_paddle(paddle){cljs_pong.draw.set_line_width_BANG_.call(null,1);
var x = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(paddle);var y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(paddle);var width = new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(paddle);var height = new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(paddle);return cljs_pong.draw.draw_surface.fillRect(x,y,width,height);
});
cljs_pong.draw.draw_score = (function draw_score(id,score){return dommy.core.set_text_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,id)),[cljs.core.str(score)].join(''));
});
cljs_pong.draw.draw_game = (function draw_game(state){cljs_pong.draw.clear.call(null);
cljs_pong.draw.draw_court.call(null);
cljs_pong.draw.draw_ball.call(null,new cljs.core.Keyword(null,"ball","ball",1016920433).cljs$core$IFn$_invoke$arity$1(state));
cljs_pong.draw.draw_paddle.call(null,new cljs.core.Keyword(null,"paddle-1","paddle-1",1787260416).cljs$core$IFn$_invoke$arity$1(state));
cljs_pong.draw.draw_paddle.call(null,new cljs.core.Keyword(null,"paddle-2","paddle-2",1787260417).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(new cljs.core.Keyword(null,"score-changed","score-changed",2692466155).cljs$core$IFn$_invoke$arity$1(state)))
{var scores = new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(state);cljs_pong.draw.draw_score.call(null,new cljs.core.Keyword(null,"#player-1-score","#player-1-score",1569468767),new cljs.core.Keyword(null,"player-1","player-1",2893176759).cljs$core$IFn$_invoke$arity$1(scores));
return cljs_pong.draw.draw_score.call(null,new cljs.core.Keyword(null,"#player-2-score","#player-2-score",2456972448),new cljs.core.Keyword(null,"player-2","player-2",2893176760).cljs$core$IFn$_invoke$arity$1(scores));
} else
{return null;
}
});

//# sourceMappingURL=draw.js.map