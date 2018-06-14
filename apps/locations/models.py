from django.db import models
from django.utils.translation import ugettext_lazy as _


class Locations(models.Model):
    """Locations model
    """
    country = models.CharField(
        verbose_name=_('Country'),
        max_length=255,
        db_index=True,
    )

    district = models.CharField(
        verbose_name=_('District'),
        max_length=255,
    )

    population = models.PositiveIntegerField(
        verbose_name=_('Human population'),
    )

    class Meta:
        verbose_name = 'Locations'

    def __str__(self):
        return f'{self.district} - {self.country}'
