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
 * Created by Jacob Bieker on 7/23/2015.
 */
$(window).bind("load", function () {
    var footer = $("#footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});