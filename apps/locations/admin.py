from django.contrib import admin
from django.utils.translation import ugettext_lazy as _
from apps.locations.models import Locations


@admin.register(Locations)
class LocationAdmin(admin.ModelAdmin):
    """Admin UI for `Locations` model
    """
    fieldsets = (
        (_('Locations'), {
            'fields': (
                'country',
                'district',
                'population'
            )
        }),
    )
    list_display = (
        'district',
        'country',
        'population',
    )


