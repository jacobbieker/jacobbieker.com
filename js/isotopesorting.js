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
/**
$( document ).ready( function() {
    // init Isotope
    var $container = $('.isotope').isotope({
        itemSelector: '.project',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
    };

    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $container.isotope({ filter: filterValue });
    });

    // bind sort button click
    $('#sorts').on( 'click', 'button', function() {
        var sortByValue = $(this).attr('data-sort-by');
        $container.isotope({ sortBy: sortByValue });
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });

});*/

$(document).ready( function() {
    // init Isotope
    var $grid = $('.isotope').isotope({
        itemSelector: '.project'
    });

    // store filter for each group
    var filters = {};

    $('.filters').on( 'click', '.button', function() {
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.isotope-buttons');
        // set filter for group
        filters[ $buttonGroup ] = $this.attr('data-filter');
        // combine filters
        var filterValue = concatValues( filters );
        // set filter for Isotope
        $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });

});

// flatten object by concatting values
function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
        value += obj[ prop ];
    }
    return value;
}
