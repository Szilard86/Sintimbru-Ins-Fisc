ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([392406.067426, 512968.597460, 400098.633416, 518308.520351]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Terenuriterenuri_active_1 = new ol.format.GeoJSON();
var features_Terenuriterenuri_active_1 = format_Terenuriterenuri_active_1.readFeatures(json_Terenuriterenuri_active_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Terenuriterenuri_active_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenuriterenuri_active_1.addFeatures(features_Terenuriterenuri_active_1);
var lyr_Terenuriterenuri_active_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenuriterenuri_active_1, 
                style: style_Terenuriterenuri_active_1,
                popuplayertitle: 'Terenuri — terenuri_active',
                interactive: true,
                title: '<img src="styles/legend/Terenuriterenuri_active_1.png" /> Terenuri — terenuri_active'
            });
var format_T_receptionateterenuri_receptionate_2 = new ol.format.GeoJSON();
var features_T_receptionateterenuri_receptionate_2 = format_T_receptionateterenuri_receptionate_2.readFeatures(json_T_receptionateterenuri_receptionate_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_T_receptionateterenuri_receptionate_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_receptionateterenuri_receptionate_2.addFeatures(features_T_receptionateterenuri_receptionate_2);
var lyr_T_receptionateterenuri_receptionate_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T_receptionateterenuri_receptionate_2, 
                style: style_T_receptionateterenuri_receptionate_2,
                popuplayertitle: 'T_receptionate — terenuri_receptionate',
                interactive: true,
                title: '<img src="styles/legend/T_receptionateterenuri_receptionate_2.png" /> T_receptionate — terenuri_receptionate'
            });
var format_Cladiri_activecladiri_active_3 = new ol.format.GeoJSON();
var features_Cladiri_activecladiri_active_3 = format_Cladiri_activecladiri_active_3.readFeatures(json_Cladiri_activecladiri_active_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Cladiri_activecladiri_active_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cladiri_activecladiri_active_3.addFeatures(features_Cladiri_activecladiri_active_3);
var lyr_Cladiri_activecladiri_active_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cladiri_activecladiri_active_3, 
                style: style_Cladiri_activecladiri_active_3,
                popuplayertitle: 'Cladiri_active — cladiri_active',
                interactive: true,
                title: '<img src="styles/legend/Cladiri_activecladiri_active_3.png" /> Cladiri_active — cladiri_active'
            });
var format_Cladiri_receptionatecladiri_receptionate_4 = new ol.format.GeoJSON();
var features_Cladiri_receptionatecladiri_receptionate_4 = format_Cladiri_receptionatecladiri_receptionate_4.readFeatures(json_Cladiri_receptionatecladiri_receptionate_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Cladiri_receptionatecladiri_receptionate_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cladiri_receptionatecladiri_receptionate_4.addFeatures(features_Cladiri_receptionatecladiri_receptionate_4);
var lyr_Cladiri_receptionatecladiri_receptionate_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cladiri_receptionatecladiri_receptionate_4, 
                style: style_Cladiri_receptionatecladiri_receptionate_4,
                popuplayertitle: 'Cladiri_receptionate — cladiri_receptionate',
                interactive: true,
                title: '<img src="styles/legend/Cladiri_receptionatecladiri_receptionate_4.png" /> Cladiri_receptionate — cladiri_receptionate'
            });
var format_Ctii_vectorizateconstructii_vectorizate_5 = new ol.format.GeoJSON();
var features_Ctii_vectorizateconstructii_vectorizate_5 = format_Ctii_vectorizateconstructii_vectorizate_5.readFeatures(json_Ctii_vectorizateconstructii_vectorizate_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Ctii_vectorizateconstructii_vectorizate_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ctii_vectorizateconstructii_vectorizate_5.addFeatures(features_Ctii_vectorizateconstructii_vectorizate_5);
var lyr_Ctii_vectorizateconstructii_vectorizate_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ctii_vectorizateconstructii_vectorizate_5, 
                style: style_Ctii_vectorizateconstructii_vectorizate_5,
                popuplayertitle: 'C-tii_vectorizate — constructii_vectorizate',
                interactive: true,
                title: '<img src="styles/legend/Ctii_vectorizateconstructii_vectorizate_5.png" /> C-tii_vectorizate — constructii_vectorizate'
            });
var format_Limita_UATlimita_uat_6 = new ol.format.GeoJSON();
var features_Limita_UATlimita_uat_6 = format_Limita_UATlimita_uat_6.readFeatures(json_Limita_UATlimita_uat_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Limita_UATlimita_uat_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limita_UATlimita_uat_6.addFeatures(features_Limita_UATlimita_uat_6);
var lyr_Limita_UATlimita_uat_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limita_UATlimita_uat_6, 
                style: style_Limita_UATlimita_uat_6,
                popuplayertitle: 'Limita _UAT — limita_uat',
                interactive: false,
                title: '<img src="styles/legend/Limita_UATlimita_uat_6.png" /> Limita _UAT — limita_uat'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Terenuriterenuri_active_1.setVisible(true);lyr_T_receptionateterenuri_receptionate_2.setVisible(true);lyr_Cladiri_activecladiri_active_3.setVisible(true);lyr_Cladiri_receptionatecladiri_receptionate_4.setVisible(true);lyr_Ctii_vectorizateconstructii_vectorizate_5.setVisible(true);lyr_Limita_UATlimita_uat_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Terenuriterenuri_active_1,lyr_T_receptionateterenuri_receptionate_2,lyr_Cladiri_activecladiri_active_3,lyr_Cladiri_receptionatecladiri_receptionate_4,lyr_Ctii_vectorizateconstructii_vectorizate_5,lyr_Limita_UATlimita_uat_6];
lyr_Terenuriterenuri_active_1.set('fieldAliases', {'fid': 'fid', 'Nr_CF': 'Numar CF', 'S_Teren': 'Suprafata Teren', 'Proprietar': 'Proprietar', 'CatFolosin': 'Categoria de Folosinta', 'Renumerota': 'Renumerotare numar administrativ', 'DenDrum': 'Denumire Drum', 'Nr_Adm': 'Numar administrativ', 'CodPostal': 'Cod Postal', 'SIRUTA': 'SIRUTA', 'DenLoc': 'Denumire Localitate', });
lyr_T_receptionateterenuri_receptionate_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', });
lyr_Cladiri_activecladiri_active_3.set('fieldAliases', {'fid': 'fid', 'Corp': 'Corp', 'Sup C Acte': 'Suprafata Constructii Acte', });
lyr_Cladiri_receptionatecladiri_receptionate_4.set('fieldAliases', {'fid': 'fid', 'Corp Activ': 'Corp Activ', 'Corp recep': 'Corp Receptionat', 'Sup C Acte': 'Suprafata Corpuri Acte', });
lyr_Ctii_vectorizateconstructii_vectorizate_5.set('fieldAliases', {'fid': 'fid', 'Corp_2': 'Corp', 'Text': 'Suprafata Corpuri Vectorizate', });
lyr_Limita_UATlimita_uat_6.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Terenuriterenuri_active_1.set('fieldImages', {'fid': 'TextEdit', 'Nr_CF': 'TextEdit', 'S_Teren': 'TextEdit', 'Proprietar': 'TextEdit', 'CatFolosin': 'TextEdit', 'Renumerota': 'TextEdit', 'DenDrum': 'TextEdit', 'Nr_Adm': 'TextEdit', 'CodPostal': 'TextEdit', 'SIRUTA': 'TextEdit', 'DenLoc': 'TextEdit', });
lyr_T_receptionateterenuri_receptionate_2.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', });
lyr_Cladiri_activecladiri_active_3.set('fieldImages', {'fid': 'TextEdit', 'Corp': 'TextEdit', 'Sup C Acte': 'TextEdit', });
lyr_Cladiri_receptionatecladiri_receptionate_4.set('fieldImages', {'fid': 'TextEdit', 'Corp Activ': 'TextEdit', 'Corp recep': 'TextEdit', 'Sup C Acte': 'TextEdit', });
lyr_Ctii_vectorizateconstructii_vectorizate_5.set('fieldImages', {'fid': 'TextEdit', 'Corp_2': 'TextEdit', 'Text': 'TextEdit', });
lyr_Limita_UATlimita_uat_6.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Terenuriterenuri_active_1.set('fieldLabels', {'fid': 'no label', 'Nr_CF': 'inline label - visible with data', 'S_Teren': 'inline label - visible with data', 'Proprietar': 'inline label - visible with data', 'CatFolosin': 'inline label - visible with data', 'Renumerota': 'inline label - visible with data', 'DenDrum': 'inline label - visible with data', 'Nr_Adm': 'inline label - visible with data', 'CodPostal': 'inline label - visible with data', 'SIRUTA': 'inline label - visible with data', 'DenLoc': 'inline label - visible with data', });
lyr_T_receptionateterenuri_receptionate_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', });
lyr_Cladiri_activecladiri_active_3.set('fieldLabels', {'fid': 'no label', 'Corp': 'inline label - visible with data', 'Sup C Acte': 'inline label - visible with data', });
lyr_Cladiri_receptionatecladiri_receptionate_4.set('fieldLabels', {'fid': 'no label', 'Corp Activ': 'inline label - visible with data', 'Corp recep': 'inline label - visible with data', 'Sup C Acte': 'inline label - visible with data', });
lyr_Ctii_vectorizateconstructii_vectorizate_5.set('fieldLabels', {'fid': 'no label', 'Corp_2': 'inline label - visible with data', 'Text': 'inline label - visible with data', });
lyr_Limita_UATlimita_uat_6.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Limita_UATlimita_uat_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});