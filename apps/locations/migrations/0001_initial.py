# Generated by Django 2.0.4 on 2018-05-07 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Locations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(db_index=True, max_length=255, verbose_name='Country')),
                ('district', models.CharField(max_length=255, verbose_name='District')),
                ('population', models.PositiveIntegerField(verbose_name='Human population')),
            ],
            options={
                'verbose_name': 'Locations',
            },
        ),
    ]