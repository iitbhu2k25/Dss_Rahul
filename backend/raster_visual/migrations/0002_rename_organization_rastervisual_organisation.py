# Generated by Django 5.1.6 on 2025-03-31 14:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("raster_visual", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="rastervisual",
            old_name="organization",
            new_name="organisation",
        ),
    ]
