CREATE TABLE projects (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255),
    category VARCHAR(255),
    description TEXT,
    image VARCHAR(255),
    location VARCHAR(255),
    duration VARCHAR(255),
    team VARCHAR(255)
);

CREATE TABLE project_technologies (
    project_id BIGINT NOT NULL,
    technologies VARCHAR(255),
    CONSTRAINT fk_project_technologies FOREIGN KEY (project_id) REFERENCES projects(id)
);

CREATE TABLE project_features (
    project_id BIGINT NOT NULL,
    features VARCHAR(255),
    CONSTRAINT fk_project_features FOREIGN KEY (project_id) REFERENCES projects(id)
);

-- Insert initial data
INSERT INTO projects (id, title, category, description, image, location, duration, team) VALUES
(1, 'Oil Refinery Expansion Project', 'Oil & Gas', 'Comprehensive expansion project for a major oil refinery including piping design, 3D modeling, and stress analysis.', '/images/projects/refinery.png', 'Mumbai, India', '18 months', '25 engineers'),
(2, 'Petrochemical Plant Design', 'Petrochemicals', 'Complete design and engineering services for a new petrochemical plant with advanced process optimization.', '/images/projects/petrochemical.jpeg', 'Gujarat, India', '24 months', '40 engineers'),
(3, 'Power Plant Modernization', 'Power Generation', 'Modernization project for a thermal power plant including efficiency improvements and emission control systems.', '/images/projects/powerplant.jpeg', 'Karnataka, India', '12 months', '20 engineers'),
(4, 'Fertilizer Plant Optimization', 'Fertilizers', 'Process optimization and capacity expansion for a fertilizer manufacturing facility.', '/images/projects/fertilizerplant.jpeg', 'Tamil Nadu, India', '15 months', '30 engineers'),
(5, 'Water Treatment Facility', 'Water/Wastewater', 'Design and construction of a large-scale water treatment facility with advanced filtration systems.', '/images/projects/waterplant.jpg', 'Maharashtra, India', '20 months', '35 engineers'),
(6, 'Hydrogen Production Plant', 'Hydrogen', 'Green hydrogen production facility design with renewable energy integration and storage systems.', '/images/projects/hydrogen.jpg', 'Rajasthan, India', '22 months', '45 engineers');

INSERT INTO project_technologies (project_id, technologies) VALUES
(1, 'AutoCAD'), (1, 'PDMS'), (1, 'CAESAR II'),
(2, 'SmartPlant'), (2, 'AVEVA'), (2, 'Aspen Plus'),
(3, 'Revit'), (3, 'ETAP'), (3, 'AutoCAD'),
(4, 'PDMS'), (4, 'HYSYS'), (4, 'AutoCAD'),
(5, 'AutoCAD'), (5, 'Revit'), (5, 'EPANET'),
(6, 'AVEVA'), (6, 'HYSYS'), (6, 'AutoCAD');

INSERT INTO project_features (project_id, features) VALUES
(1, 'Piping Design'), (1, '3D Modeling'), (1, 'Stress Analysis'), (1, 'Project Management'),
(2, 'Process Design'), (2, 'Equipment Design'), (2, 'Safety Systems'), (2, 'Control Systems'),
(3, 'Electrical Design'), (3, 'Instrumentation'), (3, 'Efficiency Analysis'), (3, 'Emission Control'),
(4, 'Process Optimization'), (4, 'Capacity Expansion'), (4, 'Safety Analysis'), (4, 'Quality Control'),
(5, 'Treatment Design'), (5, 'Piping Systems'), (5, 'Control Systems'), (5, 'Quality Monitoring'),
(6, 'Process Design'), (6, 'Renewable Integration'), (6, 'Storage Systems'), (6, 'Safety Design'); 