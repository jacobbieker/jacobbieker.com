/*
 * Copyright (C) 2015.  Jacob Bieker, jacob@bieker.us, ww.jacobbieker.com
 *
 *                                This program is free software; you can redistribute it and/or modify
 *                                it under the terms of the GNU General Public License as published by
 *                                the Free Software Foundation; either version 2 of the License, or
 *                                (at your option) any later version.
 *
 *                                This program is distributed in the hope that it will be useful,
 *                                but WITHOUT ANY WARRANTY; without even the implied warranty of
 *                                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *                                GNU General Public License for more details.
 *
 *                                You should have received a copy of the GNU General Public License along
 *                                with this program; if not, write to the Free Software Foundation, Inc.,
 *                                51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

/**
 * Created by Jacob on 7/24/2015.
 */
function sideNav() {
    if ($(window).width() < 769) {
        $('.off-canvas-wrap').removeClass('move-right');
        $('.left-off-canvas-toggle').show();
    } else {
        $('.off-canvas-wrap').addClass('move-right');
        $('.left-off-canvas-toggle').hide();
    }
}

$(window).resize(function() {
    sideNav();
});

