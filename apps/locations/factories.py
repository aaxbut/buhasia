import factory
from factory import fuzzy
from apps.locations.models import Locations


class LocationsFactory(factory.django.DjangoModelFactory):
    """Factory for generate the locations
    """
    class Meta:
        model = Locations
        django_get_or_create = (
            'country',
        )

    country = factory.Faker('country')
    district = factory.Faker('state')
    population = fuzzy.FuzzyInteger(1, 500000)
